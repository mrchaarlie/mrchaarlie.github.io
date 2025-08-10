import { usePassword } from '../auth/PasswordProvider'

export default function SiteHeader() {
  const { isAuthed, logout } = usePassword()
  return (
    <header className="site-header">
      <div className="inner">
        <a href="/" className="brand" aria-label="Home">
          <img src="/face.avif" alt="Charles Wu" className="avatar" width={32} height={32} loading="eager" decoding="async" />
        </a>
        <nav>
          <a href="/Charles-Wu-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          {isAuthed ? (
            <a href="#" onClick={(e) => { e.preventDefault(); logout() }}>Lock</a>
          ) : null}
        </nav>
      </div>
    </header>
  )
} 