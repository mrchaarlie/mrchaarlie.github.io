import Item from '../components/Item'
import { portfolioItems } from '../data/portfolio'
import BackgroundTopo from '../components/BackgroundTopo'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DecisionModal from '../components/DecisionModal'

export default function Home() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  function handleItemClick(slug: string) {
    if (slug === 'asana') {
      setModalOpen(true)
      return
    }
    navigate(`/work/${slug}`)
  }

  return (
    <main>
      <BackgroundTopo />

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Charles Wu, <span className="muted">Staff Product Designer</span></h1>
          <h2 className="hero-headline">Making enterprise software human</h2>
          <p className="hero-description">
            Design Lead at <a href="https://asana.com" target="_blank" rel="noopener noreferrer">Asana</a>, crafting scalable access control systems that are simple, secure, and used by millions.
          </p>
        </div>
      </section>

      <section className="case-studies">
        <div className="content">
          {portfolioItems.map((p, idx) => (
            <Item
              key={p.slug}
              index={idx}
              to={`/work/${p.slug}`}
              title={p.title}
              description={p.description}
              onClick={(e) => { e.preventDefault(); handleItemClick(p.slug) }}
            />
          ))}
        </div>
      </section>

      <DecisionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onContinue={() => { setModalOpen(false); navigate('/work/asana') }}
      />

      <div className="spacer">temp</div>

      <div className="footer">insert footer here</div>
    </main>
  )
} 