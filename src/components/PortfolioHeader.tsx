import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ThemeToggle from './ThemeToggle'


type SectionLink = { id: string; title: string }

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default function PortfolioHeader() {
  const [sections, setSections] = useState<SectionLink[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const [isStuck, setIsStuck] = useState(false)


  const onNavClick = useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    try {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start', inline: 'nearest' })
    } catch {
      const top = window.scrollY + el.getBoundingClientRect().top - 60
      window.scrollTo(0, top)
    }
    if (history.replaceState) {
      history.replaceState(null, '', `#${id}`)
    } else {
      window.location.hash = id
    }
  }, [])

  useEffect(() => {
    const article = document.querySelector('article.case-study') as HTMLElement | null
    if (!article) return

    const collect = () => {
      const headings = Array.from(article.querySelectorAll('h2')) as HTMLHeadingElement[]
      const links: SectionLink[] = []
      for (const h of headings) {
        if (!h.id || h.id.trim() === '') {
          h.id = slugify(h.textContent || 'section')
        }
        links.push({ id: h.id, title: h.textContent || 'Section' })
      }
      setSections(links)
    }

    collect()

    const observer = new MutationObserver(() => collect())
    observer.observe(article, { subtree: true, childList: true, characterData: true })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (sections.length === 0) return
    const article = document.querySelector('article.case-study') as HTMLElement | null
    if (!article) return

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-60px 0px -70% 0px',
      threshold: 0,
    }
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      }
    }, options)

    const targets = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as Element[]
    targets.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [sections])

  // Observe sentinel to know when header is stuck at top
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const io = new IntersectionObserver(([entry]) => {
      // If sentinel is not intersecting, header has reached top
      setIsStuck(!entry.isIntersecting)
    }, { root: null, threshold: 0 })
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  // Keep memo to avoid rerenders of handlers, though we now use native anchors
  useMemo(() => sections, [sections])

  return (
    <>
      <div ref={sentinelRef} aria-hidden style={{ position: 'relative', top: 0, height: 1 }} />
      <div className="portfolio-header">
        <div className="inner">
          <a href="/" className={`brand${isStuck ? '' : ' brand--hidden'}`} aria-label="Home">
            <img src="/face.avif" alt="Charles Wu" className="avatar" width={28} height={28} loading="eager" decoding="async" />
          </a>
          <div className="header-content">
            <nav className="portfolio-nav" aria-label="Case study sections">
              {sections.map((s, idx) => (
                <a key={s.id} href={`#${s.id}`} className={`portfolio-nav-link${activeId === s.id ? ' is-active' : ''}`} onClick={onNavClick(s.id)}>
                  {`${idx + 1}. ${s.title}`}
                </a>
              ))}
            </nav>
          </div>
          <span/>
          
        </div>
        <div className="progressive-blur">
          <span className="pg-item pg-5"></span>
          <span className="pg-item pg-4"></span>
          <span className="pg-item pg-3"></span>
          <span className="pg-item pg-2"></span>
          <span className="pg-item pg-1"></span>
        </div>
      </div>
    </>
  )
} 