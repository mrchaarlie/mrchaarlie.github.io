import { lazy } from 'react'

export type PortfolioItem = {
  slug: string
  company: string
  companyLogo: string
  title: string
  thumbnail1: string
  thumbnail2?: string
  thumbnail3?: string
  metric1Big: string
  metric1Description: string
  metric2Big?: string
  metric2Description?: string
  metric3Big?: string
  metric3Description?: string
  description: string
}

export const portfolioItems: PortfolioItem[] = [
  { slug: 'asana', company: 'Asana', companyLogo: 'asana.svg', title: 'Building a scalable access control framework', thumbnail1: 'thumbnail-asana-1.png', thumbnail2: 'thumbnail-asana-2.png', metric1Big: '99%', metric1Description: 'Enterprise adoption', description: 'Designed and implemented a permissions system for Asana\'s work objects, that strengthenend security and governance across the application. Adopted by 99% of top enterprise customers, and unlocked deals' },
  { slug: 'calendly-analytics',  company: 'Calendly', companyLogo: 'calendly.svg', title: 'Launching the industry\'s first scheduling analytics dashboard', thumbnail1: 'thumbnail-1.avif', metric1Big: '55%', metric1Description: 'Adoption', metric2Big: '93%', metric2Description: 'CSAT', description: 'Designed a 0–1 analytics feature that gave admins actionable insights into scheduling behavior. Achieved 55% adoption and improved customer retention.' },
  { slug: 'calendly-org-consolidation', company: 'Calendly', companyLogo: 'calendly.svg', title: 'Streamlining enterprise org consolidation', thumbnail1: 'thumbnail-1.avif', metric1Big: '3hrs +', metric1Description: 'Time Saved per employee per week', description: 'Built an internal tool that helped internal teams consolidate enterprise accounts, reducing overhead and customer frustration. Eliminated hours of weekly manual work for CSMs while retaining customers.' },
  { slug: 'liveperson-taxonomy-annotation', company: 'LivePerson', companyLogo: 'liveperson.svg', title: 'Accelerating model training with a taxonomy annotation tool', thumbnail1: 'thumbnail-1.avif', metric1Big: '86%', metric1Description: 'Faster classification',  metric2Big: '–15%', metric2Description: 'Error rate', description: 'Created a high-efficiency annotation tool to accelerate message labeling for model training. Achieved 86% faster classification, 26% faster task completion, and a 15% drop in errors.' },
]

export const portfolioComponentBySlug: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'asana': lazy(() => import('../portfolio/AsanaAccessControls')),
  'calendly-org-consolidation': lazy(() => import('../portfolio/CalendlyOrgConsolidation')),
  'calendly-analytics': lazy(() => import('../portfolio/CalendlyAnalytics')),
  'liveperson-taxonomy-annotation': lazy(() => import('../portfolio/LivepersonTaxonomyAnnotator')),
} 