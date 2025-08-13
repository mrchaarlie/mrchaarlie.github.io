import Card from '../components/Card'
import { portfolioItems } from '../data/portfolio'
import BackgroundTopo from '../components/BackgroundTopo'

export default function Home() {
  return (
    <main>
      <BackgroundTopo />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Charles Wu, <span className="muted">Staff Product Designer</span></h1>
          <h2 className="hero-headline">Solving complexity at scale</h2>
          <p className="hero-description">
            I'm currently a lead designer at <a href="https://asana.com" target="_blank" rel="noopener noreferrer">Asana</a>, building scalable access controls.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="https://www.linkedin.com/in/mrchaarlie/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
            <a className="btn btn-secondary" href="/Charles-Wu-Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </section>

      <h2 className="section-title">Selected Work</h2>
      <div className="grid">
        {portfolioItems.map((p) => (
          <Card key={p.slug} to={`/work/${p.slug}`} title={p.title} description={p.description} />
        ))}
      </div>

      <div className="spacer">temp</div>

      <div className="footer">insert footer here</div>
    </main>
  )
} 