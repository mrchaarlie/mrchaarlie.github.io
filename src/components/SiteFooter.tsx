import { useCallback, useEffect, useState } from 'react'

function getResolvedTheme(): 'light' | 'dark' {
  const attr = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null
  if (attr === 'light' || attr === 'dark') return attr
  const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return isSystemDark ? 'dark' : 'light'
}

export default function SiteFooter() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getResolvedTheme())

  useEffect(() => {
    // If user hasn't overridden, keep reflecting system changes
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
    <footer className="site-footer">
      <div className="inner">
        <small>© {new Date().getFullYear()} Charles Wu</small>
        <button className="btn btn-secondary" onClick={toggleTheme} aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
        </button>
      </div>
    </footer>
  )
} 