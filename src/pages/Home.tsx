import Card from '../components/Card'
import { portfolioItems } from '../data/portfolio'
import { usePassword } from '../auth/PasswordProvider'

export default function Home() {
  const { isAuthed, logout } = usePassword()
  return (
    <main>
      <header>
        <h1>Charles Wu — Product Designer</h1>
        <nav>
          <a href="/Charles-Wu-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          {isAuthed ? (
            <a href="#" onClick={(e) => { e.preventDefault(); logout() }}>Lock</a>
          ) : null}
        </nav>
      </header>

      <p className="intro">
        I design coherent product experiences that balance user needs with business impact. Below are select case studies. Some work is password-protected for confidentiality.
      </p>

      <h2 className="section-title">Selected Work</h2>
      <div className="grid">
        {portfolioItems.map((p) => (
          <Card key={p.slug} to={`/work/${p.slug}`} title={p.title} description={p.description} />
        ))}
      </div>
    </main>
  )
} 