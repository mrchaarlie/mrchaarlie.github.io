import { FormEvent, useState } from 'react'
import { usePassword } from '../auth/PasswordProvider'

export default function PasswordGate({ onSuccess }: { onSuccess?: () => void }) {
  const { verify, verifying } = usePassword()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

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
      {error && <div className="error" role="alert">{error}</div>}
    </div>
  )
} 