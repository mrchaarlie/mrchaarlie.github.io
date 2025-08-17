export default function SiteFooter() {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <footer className="site-footer">
      <div className="inner">
        <small>© {new Date().getFullYear()} Charles Wu</small>
        <button className="btn btn-secondary" onClick={toggleTheme} aria-label="Toggle theme">
          Toggle theme
        </button>
      </div>
    </footer>
  )
} 