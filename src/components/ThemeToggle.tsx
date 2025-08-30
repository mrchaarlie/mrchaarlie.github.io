import { useCallback, useEffect, useState } from 'react'

function getResolvedTheme(): 'light' | 'dark' {
  const attr = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null
  if (attr === 'light' || attr === 'dark') return attr
  const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return isSystemDark ? 'dark' : 'light'
}

export default function ThemeToggle() {
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
    <button className="icon-button icon-button--large" onClick={toggleTheme} aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      <img className="theme-icon" src="icons/moon.svg" alt="" width={20} height={20} />
    </button>
  )
} 