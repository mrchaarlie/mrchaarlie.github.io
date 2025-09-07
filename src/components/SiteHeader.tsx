import { useCallback, useEffect, useState } from 'react'
import { usePassword } from '../auth/PasswordProvider'
import ThemeToggle from './ThemeToggle'

function getResolvedTheme(): 'light' | 'dark' {
  const attr = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null
  if (attr === 'light' || attr === 'dark') return attr
  const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return isSystemDark ? 'dark' : 'light'
}

export default function SiteHeader() {
  const { isAuthed, logout } = usePassword()
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getResolvedTheme())

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)')
      const onChange = () => setTheme(getResolvedTheme())
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const current = getResolvedTheme()
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
    window.dispatchEvent(new Event('themechange'))
  }, [])

  return (
    <header className="site-header">
      <div className="inner">
        <a href="/" className="brand" aria-label="Home">
          <img src="/face.avif" alt="Charles Wu" className="avatar" width={32} height={32} loading="eager" decoding="async" />
        </a>
        <nav>
        {/* {isAuthed ? (
            <a href="#" onClick={(e) => { e.preventDefault(); logout() }}>Lock</a>
          ) : null} */}
          
          <a className="icon-button icon-button--large" href="/Charles-Wu-Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF">
            <img className="theme-icon" src="/icons/doc.svg" alt="" width={20} height={20} />
          </a>
          <ThemeToggle />
        </nav>
      </div>
      <div className="progressive-blur">
        <span className="pg-item pg-5"></span>
        <span className="pg-item pg-4"></span>
        <span className="pg-item pg-3"></span>
        <span className="pg-item pg-2"></span>
        <span className="pg-item pg-1"></span>
      </div>
    </header>
  )
} 