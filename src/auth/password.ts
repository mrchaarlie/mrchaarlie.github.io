export async function hashStringSHA256(input: string): Promise<string> {
  const enc = new TextEncoder()
  const data = enc.encode(input)
  const digest = await crypto.subtle.digest('SHA-256', data)
  const bytes = new Uint8Array(digest)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function getExpectedPasswordHash(): string | undefined {
  const hash = import.meta.env.VITE_PORTFOLIO_PASSWORD_HASH as string | undefined
  return (hash && hash.trim()) || undefined
}

export async function verifyPassword(input: string): Promise<boolean> {
  const expected = getExpectedPasswordHash()
  if (!expected) return false
  const computed = await hashStringSHA256(input)
  return timingSafeEqualHex(computed, expected)
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let res = 0
  for (let i = 0; i < a.length; i++) {
    res |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return res === 0
} 