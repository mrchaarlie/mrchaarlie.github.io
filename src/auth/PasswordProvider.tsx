import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { verifyPassword } from './password'

const SESSION_KEY = 'portfolioAuthed'

type PasswordContextValue = {
  isAuthed: boolean
  verifying: boolean
  verify: (input: string) => Promise<boolean>
  logout: () => void
}

const PasswordContext = createContext<PasswordContextValue | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState<boolean>(false)
  const [verifying, setVerifying] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY)
    setIsAuthed(stored === 'true')
  }, [])

  const verify = useCallback(async (input: string) => {
    setVerifying(true)
    try {
      const ok = await verifyPassword(input)
      if (ok) {
        sessionStorage.setItem(SESSION_KEY, 'true')
        setIsAuthed(true)
      }
      return ok
    } finally {
      setVerifying(false)
    }
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY)
    setIsAuthed(false)
  }, [])

  const value = useMemo(() => ({ isAuthed, verifying, verify, logout }), [isAuthed, verifying, verify, logout])

  return <PasswordContext.Provider value={value}>{children}</PasswordContext.Provider>
}

export function usePassword() {
  const ctx = useContext(PasswordContext)
  if (!ctx) throw new Error('usePassword must be used within PasswordProvider')
  return ctx
} 