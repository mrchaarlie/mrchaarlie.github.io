import { useCallback, useEffect, useMemo, useState } from 'react'
import ThemeToggle from './ThemeToggle'


type SectionLink = { id: string; title: string }

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function getResolvedTheme(): 'light' | 'dark' {
  const attr = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null
  if (attr === 'light' || attr === 'dark') return attr
  const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return isSystemDark ? 'dark' : 'light'
}

export default function PortfolioHeader() {
  const [sections, setSections] = useState<SectionLink[]>([])
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getResolvedTheme())
  const [activeId, setActiveId] = useState<string | null>(null)

  const toggleTheme = useCallback(() => {
    const current = getResolvedTheme()
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
    window.dispatchEvent(new Event('themechange'))
  }, [])

  const onNavClick = useCallback((id: string) => () => {
    setActiveId(id)
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
    observer.observe(article, { subtree: true, childList: true })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (sections.length === 0) return
    const article = document.querySelector('article.case-study') as HTMLElement | null
    if (!article) return

    const options: IntersectionObserverInit = {
      root: null,
      // Trigger when heading crosses 25% from top accounting for sticky header
      rootMargin: '-64px 0px -70% 0px',
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

  // Keep memo to avoid rerenders of handlers, though we now use native anchors
  useMemo(() => sections, [sections])

  return (
    <div className="portfolio-header">
      <div className="inner">
        <a href="/" className="brand" aria-label="Home">
          <img src="/face.avif" alt="Charles Wu" className="avatar" width={28} height={28} loading="eager" decoding="async" />
        </a>
        <nav className="portfolio-nav" aria-label="Case study sections">
          {sections.map((s, idx) => (
            <a key={s.id} href={`#${s.id}`} className={`portfolio-nav-link${activeId === s.id ? ' is-active' : ''}`} onClick={onNavClick(s.id)}>
              {`${idx + 1}. ${s.title}`}
            </a>
          ))}
        </nav>
        {/* add theme toggle */}
        <ThemeToggle />
      </div>
    </div>
  )
} 