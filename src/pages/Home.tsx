import Card from '../components/Card'
import { portfolioItems } from '../data/portfolio'
import { usePassword } from '../auth/PasswordProvider'
import BackgroundTopo from '../components/BackgroundTopo'
import GlitchText from '../components/GlitchText'

export default function Home() {
  const { isAuthed, logout } = usePassword()
  return (
    <main>
      <BackgroundTopo />
      <header>
        <h1><GlitchText>Charles Wu — Staff Product Designer</GlitchText></h1>
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