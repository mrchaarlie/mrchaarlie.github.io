import Item from '../components/Item'
import { portfolioItems } from '../data/portfolio'
import { useNavigate } from 'react-router-dom'
import { useState, lazy, Suspense } from 'react'
import DecisionModal from '../components/DecisionModal'
import SiteFooter from '../components/SiteFooter'
import { usePassword } from '../auth/PasswordProvider'

const BackgroundDots = lazy(() => import('../components/BackgroundDots'))

export default function Home() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const { isAuthed } = usePassword()
  const [pendingSlug, setPendingSlug] = useState<string | null>(null)

  function handleItemClick(slug: string) {
    if (slug === 'asana' || slug === 'calendly-analytics') {
      if (isAuthed) {
        navigate(`/work/${slug}`)
        return
      }
      setPendingSlug(slug)
      setModalOpen(true)
      return
    }
    navigate(`/work/${slug}`)
  }


  return (
    <main>
      <Suspense fallback={null}>
        <BackgroundDots />
      </Suspense>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Charles Wu, <span className="muted">Staff Product Designer</span></h1>
          <h2 className="hero-headline">Making enterprise software, human</h2>
          <p className="hero-description">
            Currently, design lead at <a href="https://asana.com" target="_blank" rel="noopener noreferrer">Asana</a>, focused on simplifying complex enterprise systems. I specialize in access controls and AI-driven workflows, creating secure, intuitive solutions used by millions.
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
              company={p.company}
              companyLogo={p.companyLogo}
              metric1Big={p.metric1Big}
              metric1Description={p.metric1Description}
              metric2Big={p.metric2Big}
              metric2Description={p.metric2Description}
              metric3Big={p.metric3Big}
              metric3Description={p.metric3Description}
              thumbnail1={p.thumbnail1}
              thumbnail2={p.thumbnail2}
              thumbnail3={p.thumbnail3}
              thumbnailExplode={p.thumbnailExplode}
              description={p.description}
              onClick={(e) => { e.preventDefault(); handleItemClick(p.slug) }}
            />
          ))}
        </div>
      </section>

      <DecisionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onContinue={() => { setModalOpen(false); navigate(`/work/${pendingSlug || 'asana'}`) }}
      />

      <section className="about margin-bottom-3">
        <div className="content">
          <h2>About</h2>

          <div className="grid grid-cols-8 gap-2">
            <div className="about-image">
              <img src="/images/charles-headshot.jpg" alt="A photo of Charles" loading="lazy" decoding="async" className="box-shadow" />
            </div>
            <div className="about-text">
              <p>With over a decade in product design, I simplify complex systems into intuitive user experiences. Starting in mobile and web development, I built a strong technical foundation before transitioning to UX and leading end-to-end design for enterprise platforms, including access control frameworks, analytics dashboards, and design systems.</p>

              <p>I specialize in creating scalable, user-focused design solutions that evolve with product growth. I also mentor emerging designers and foster cross-functional collaboration to drive impactful outcomes.</p>

              <p>Outside work, I enjoy rock climbing, volleyball, cycling in San Francisco, and spending time with my cat and foster(s).</p>

            </div>
          </div>


        </div>
      </section>

      <SiteFooter />
    </main>
  )
} 