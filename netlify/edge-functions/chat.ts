// deno-lint-ignore-file
// @ts-ignore declare Deno for type-checkers outside edge runtime
declare const Deno: { env: { get(k: string): string | undefined } }

export default async (req: Request) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
      },
    })
  }

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const apiKey = Deno.env.get('OPENAI_API_KEY')
  if (!apiKey) return new Response('Missing OPENAI_API_KEY', { status: 500 })

  const sys = Deno.env.get('ASSISTANT_SYSTEM') ?? 'You are Charles’s helpful portfolio chatbot.'
  const model = Deno.env.get('OPENAI_MODEL') ?? 'gpt-4o-mini'

  let body: any = {}
  try { body = await req.json() } catch {}
  const userMessage = String(body?.userMessage ?? '')

  const attempt = async () => {
    return fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
      },
      body: JSON.stringify({
        model,
        stream: true,
        messages: [
          { role: 'system', content: sys },
          { role: 'user', content: userMessage },
        ],
      }),
    })
  }

  // simple retry (max 2 retries) for 429/5xx
  let resp = await attempt()
  for (let i = 0; i < 2 && (resp.status === 429 || resp.status >= 500); i++) {
    await new Promise(r => setTimeout(r, 250 * (i + 1)))
    resp = await attempt()
  }

  if (!resp.ok || !resp.body) {
    const txt = await resp.text().catch(()=>'')
    return new Response(`Upstream error: ${txt || resp.status}`, { status: 502, headers: { 'Access-Control-Allow-Origin': '*' } })
  }

  return new Response(resp.body, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    },
  })
} 