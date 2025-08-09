import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { usePassword } from '../auth/PasswordProvider'
import KineticLines, { type KineticStatus } from './KineticLines'

export default function PasswordGate({ onSuccess }: { onSuccess?: () => void }) {
  const { verify, verifying } = usePassword()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevLenRef = useRef(0)

  const n = useMemo(() => Math.min(password.length, 6), [password.length])
  const status: KineticStatus = useMemo(() => {
    if (verifying) return 'validating'
    if (password.length === 0) return 'idle'
    if (password.length < 6) return 'typing'
    return 'armed'
  }, [password.length, verifying])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    if (password.length >= 6 && !verifying) {
      debounceRef.current = setTimeout(async () => {
        const ok = await verify(password)
        if (ok) {
          onSuccess?.()
        } else {
          setError('Incorrect password. Please try again.')
        }
      }, 400)
    }
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [password, verify, verifying, onSuccess])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    const ok = await verify(password)
    if (ok) {
      onSuccess?.()
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <div className="password-panel">
      <h2>Enter password</h2>

      <KineticLines length={password.length} status={status} />
      
      <form onSubmit={onSubmit}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Portfolio password"
          autoFocus
        />
        <button type="submit" disabled={verifying}>{verifying ? 'Checking…' : 'Unlock'}</button>
      </form>
      {error && <div className="error" role="alert" aria-live="polite">{error}</div>}
    </div>
  )
} 