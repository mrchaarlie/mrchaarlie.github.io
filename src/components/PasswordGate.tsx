import { FormEvent, useMemo, useState } from 'react'
import { usePassword } from '../auth/PasswordProvider'
import KineticLines, { type KineticStatus } from './KineticLines'

export default function PasswordGate({ onSuccess }: { onSuccess?: () => void }) {
  const { verify, verifying } = usePassword()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [ephemeralStatus, setEphemeralStatus] = useState<KineticStatus | null>(null)

  const n = useMemo(() => Math.min(password.length, 6), [password.length])
  const computedStatus: KineticStatus = useMemo(() => {
    if (verifying) return 'validating'
    if (password.length === 0) return 'idle'
    if (password.length < 6) return 'typing'
    return 'armed'
  }, [password.length, verifying])

  const status: KineticStatus = ephemeralStatus ?? computedStatus

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    const ok = await verify(password)
    if (ok) {
      // Show success animation before redirect
      setEphemeralStatus('success')
      setTimeout(() => {
        onSuccess?.()
      }, 800)
    } else {
      setError('Incorrect password. Please try again.')
      setEphemeralStatus('failure')
      setTimeout(() => setEphemeralStatus(null), 600)
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