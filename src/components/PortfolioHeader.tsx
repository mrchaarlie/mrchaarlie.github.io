import { useEffect, useMemo, useState } from 'react'

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

  useEffect(() => {
    const article = document.querySelector('article.case-study')
    if (!article) return

    const headings = Array.from(article.querySelectorAll('h2')) as HTMLHeadingElement[]
    const links: SectionLink[] = []

    // Ensure each h2 has an id and collect
    for (const h of headings) {
      if (!h.id || h.id.trim() === '') {
        h.id = slugify(h.textContent || 'section')
      }
      links.push({ id: h.id, title: h.textContent || 'Section' })
    }

    // Add an Overview link to the top of the article
    const articleId = (article as HTMLElement).id || 'top'
    if (!(article as HTMLElement).id) (article as HTMLElement).id = articleId
    setSections([{ id: articleId, title: 'Overview' }, ...links])
  }, [])

  const onNavClick = useMemo(() => {
    const HEADER_OFFSET = 56 // px, approximate sticky header height
    return (id: string) => (e: React.MouseEvent) => {
      e.preventDefault()
      const el = document.getElementById(id)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top - HEADER_OFFSET
      window.scrollTo({ top: scrollTop, behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="portfolio-header">
      <div className="inner">
        <a href="/" className="brand" aria-label="Home">
          <img src="/face.avif" alt="Charles Wu" className="avatar" width={28} height={28} loading="eager" decoding="async" />
        </a>
        <nav className="portfolio-nav" aria-label="Case study sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={onNavClick(s.id)} className="portfolio-nav-link">
              {s.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
} 