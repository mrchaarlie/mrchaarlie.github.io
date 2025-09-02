import { useEffect, useMemo, useRef, useState } from 'react'

function IconChat() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none" className="icon icon--chat">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.1916 3.24999C9.2941 3.24999 8.16411 3.26767 7.29251 3.57266C5.64084 4.15061 4.34223 5.44922 3.76428 7.10089C3.45929 7.9725 3.44161 9.10248 3.44161 12C3.44161 14.8975 3.45929 16.0275 3.76428 16.8991C4.34223 18.5508 5.64084 19.8494 7.29251 20.4273C7.89604 20.6385 8.67081 20.7207 10.209 20.7421L11.4416 20.7592V24.8237L18.4251 20.75H19.1916C22.0891 20.75 23.2191 20.7323 24.0907 20.4273C25.7424 19.8494 27.041 18.5508 27.6189 16.8991C27.9239 16.0275 27.9416 14.8975 27.9416 12C27.9416 9.10248 27.9239 7.9725 27.6189 7.10089C27.041 5.44922 25.7424 4.15061 24.0907 3.57266C23.2191 3.26767 22.0891 3.24999 19.1916 3.24999H12.1916ZM11.9153 0.749949C12.0062 0.74997 12.0983 0.749991 12.1916 0.749991H19.1916C19.2849 0.749991 19.377 0.74997 19.4679 0.749949C21.995 0.749364 23.5905 0.748995 24.9164 1.21295C27.2862 2.04218 29.1494 3.9054 29.9786 6.27519C30.4426 7.60111 30.4422 9.1966 30.4417 11.7237C30.4416 11.8146 30.4416 11.9067 30.4416 12C30.4416 12.0933 30.4416 12.1854 30.4417 12.2763C30.4422 14.8034 30.4426 16.3989 29.9786 17.7248C29.1494 20.0946 27.2862 21.9578 24.9164 22.787C23.5905 23.251 21.995 23.2506 19.4679 23.25C19.377 23.25 19.2849 23.25 19.1916 23.25H19.101L8.94161 29.1763V23.2049C7.99178 23.1545 7.19934 23.0434 6.46681 22.787C4.09702 21.9578 2.2338 20.0946 1.40457 17.7248C0.940615 16.3989 0.940984 14.8034 0.941569 12.2763C0.94159 12.1854 0.941611 12.0933 0.941611 12C0.941611 11.9067 0.94159 11.8146 0.941569 11.7237C0.940984 9.1966 0.940615 7.60111 1.40457 6.27519C2.2338 3.9054 4.09702 2.04218 6.46681 1.21295C7.79273 0.748995 9.38822 0.749364 11.9153 0.749949Z" fill="white"/>
    </svg>
  )
}

function IconMinimize() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="icon icon--minimize"><path d="M24.1818182,21 C24.6336875,21 25,21.4477153 25,22 C25,22.5522847 24.6336875,23 24.1818182,23 L7.81818182,23 C7.36631248,23 7,22.5522847 7,22 C7,21.4477153 7.36631248,21 7.81818182,21 L24.1818182,21 Z"></path></svg>
  )
}

function IconSend() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="icon icon--send"><path d="M9.05674797,7.10056554 L9.13703813,7.13553157 L25.4390381,15.1015316 L25.5284558,15.1506535 L25.6286153,15.2222405 C25.7452987,15.313793 25.8339182,15.4266828 25.895416,15.5505399 L25.9423517,15.6622033 L25.9751927,15.7773803 L25.9891204,15.8509608 L25.998657,15.9475578 L25.9972397,16.0748669 L25.9800642,16.201216 L25.9701282,16.2435678 C25.9550365,16.3071288 25.9331784,16.3694784 25.9050831,16.4294253 L25.8937351,16.4490792 C25.8488724,16.5422577 25.7878083,16.6290528 25.7112518,16.7055442 L25.609137,16.7931281 L25.539527,16.8424479 L25.4390381,16.8984684 L9.05674797,24.8994345 C8.4880852,25.1179893 7.84373932,24.9716543 7.42618713,24.5298922 C7.02348961,24.1049956 6.89354829,23.48994 7.08502271,22.9526995 L9.44381329,15.9994998 L7.08997091,9.06153122 C6.90991684,8.5560159 7.00409914,7.99707209 7.33051276,7.58090053 L7.4252609,7.47108641 C7.84373932,7.02834566 8.4880852,6.8820107 9.05674797,7.10056554 Z M20.6761421,16.9994644 L11.2161421,16.9994644 L9.33681329,22.5404998 L20.6761421,16.9994644 Z M9.33581329,9.45749977 L11.2161421,14.9994644 L20.6761421,14.9994644 L9.33581329,9.45749977 Z"></path></svg>
  )
}

const API_ENDPOINT = '/api/chat'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ id: string; sender: 'bot' | 'user'; content: string; isLoading?: boolean; shouldAnimate?: boolean }>>([])
  const [input, setInput] = useState('')
  const convoRef = useRef<HTMLDivElement | null>(null)

  const toggle = () => {
    if (!isOpen) {
      warmup()
      if (messages.length === 0) {
        // seed greeting
        setMessages([{ id: 'greet', sender: 'bot', content: 'Hello there! Do you have any questions for me?', shouldAnimate: false }])
      }
    }
    setIsOpen((v) => !v)
  }

  const warmup = async () => {
    try {
      await fetch(API_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ warmup: true }) })
    } catch {}
  }

  const send = async () => {
    const text = input.trim()
    if (!text) return
    const userId = `u-${Date.now()}`
    const botId = `b-${Date.now()}`

    setMessages((prev) => [
      ...prev,
      { id: userId, sender: 'user', content: text, shouldAnimate: true },
      { id: botId, sender: 'bot', content: '', isLoading: true, shouldAnimate: true },
    ])
    setInput('')

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'text/event-stream' },
        body: JSON.stringify({ userMessage: text }),
      })

      if (!res.ok) {
        const errText = await res.text()
        setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, content: `Error: ${errText || res.status}` } : m)))
        return
      }

      const reader = res.body?.getReader()
      if (!reader) {
        const fallback = await res.text()
        setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, content: fallback } : m)))
        return
      }

      const decoder = new TextDecoder()
      let buffer = ''

      for (;;) {
        const { value, done } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })

        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const raw of lines) {
          const line = raw.trim()
          if (!line.startsWith('data:')) continue
          const payload = line.slice(5).trim()
          if (!payload || payload === '[DONE]') continue
          try {
            const json = JSON.parse(payload)
            const delta = json?.choices?.[0]?.delta?.content
            if (delta) {
              setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, isLoading: false, content: (m.content || '') + delta } : m)))
            }
          } catch {
            // ignore malformed chunks
          }
        }
      }
    } catch (err: any) {
      setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, content: err?.message || 'Network error' } : m)))
    }
  }

  useEffect(() => {
    if (!convoRef.current) return
    convoRef.current.scrollTop = convoRef.current.scrollHeight
  }, [messages, isOpen])

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const renderMessage = (m: { id: string; sender: 'bot' | 'user'; content: string; isLoading?: boolean; shouldAnimate?: boolean }) => {
    if (m.sender === 'user') {
      return (
        <div key={m.id} className={`cw-msg cw-msg--user ${m.shouldAnimate ? 'cw-anim' : ''}`}>{m.content}</div>
      )
    }
    return (
      <div key={m.id} className={`cw-msg cw-msg--bot ${m.shouldAnimate ? 'cw-anim' : ''}`}>{m.isLoading ? <LoadingDots /> : m.content}</div>
    )
  }

  return (
    <div className={`cw-chat ${isOpen ? 'is-open' : ''}`}>
      <div className="cw-bg"/>
      <div className="cw-glow"/>

      <div className="cw-container">
        

        {/* Header */}
        <div className="cw-header" style={{ display: isOpen ? 'flex' : 'none' }}>
          <div className="cw-avatar" aria-hidden>
            <img src="/face.avif" alt="Charles (bot)" width={40} height={40} />
          </div>
          <div className="cw-header-text">
            <div className="cw-title">Charles (Bot)</div>
            <div className="cw-sub">🤖 Chat with my bot</div>
          </div>
          <button className="icon-button icon-button-minimize theme-icon" onClick={toggle} aria-label="Minimize chat"><IconMinimize /></button>
        </div>

        {/* Body */}
        <div className="cw-body" style={{ display: isOpen ? 'flex' : 'none' }}>
          <div ref={convoRef} className="cw-history">
            {messages.map(renderMessage)}
          </div>
        </div>

        {/* Input */}
        <div className="cw-input" style={{ display: isOpen ? 'flex' : 'none' }}>
          <textarea className="cw-textarea" placeholder="Chat with me" rows={2} onKeyDown={onKeyDown} value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="icon-button icon-button-send theme-icon" onClick={send} aria-label="Send"><IconSend /></button>
        </div>

        {!isOpen && (
          <button className="cw-open" onClick={toggle} aria-label="Open chat">
            <IconChat />
            <div className="cw-ellipses">
              <span className="dot dot-1"/>
              <span className="dot dot-2"/>
              <span className="dot dot-3"/>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

function LoadingDots() {
  return (
    <div className="cw-loader">
      <span className="d d1"/>
      <span className="d d2"/>
      <span className="d d3"/>
    </div>
  )
} 