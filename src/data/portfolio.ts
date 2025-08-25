import { lazy } from 'react'

export type PortfolioItem = {
  slug: string
  company: string
  companyLogo: string
  title: string
  thumbnail1: string
  thumbnail2?: string
  thumbnail3?: string
  thumbnailExplode?: boolean
  metric1Big: string
  metric1Description: string
  metric2Big?: string
  metric2Description?: string
  metric3Big?: string
  metric3Description?: string
  description: string
}

export const portfolioItems: PortfolioItem[] = [
  { slug: 'asana', company: 'Asana', companyLogo: 'asana.svg', title: 'Scalable access control framework', description: 'Designed a permissions system for Asana’s core work objects, strengthening enterprise security, governance, and unlocking new deals.', thumbnail1: 'thumbnail-asana-1.png', thumbnail2: 'thumbnail-asana-2.png', metric1Big: '99%', metric1Description: 'Enterprise adoption' },
  { slug: 'calendly-analytics',  company: 'Calendly', companyLogo: 'calendly.svg', title: 'Scheduling analytics dashboard', description: 'Created the industry’s first analytics dashboard, giving admins visibility into scheduling behavior and proving Calendly’s value to organizations.', thumbnail1: 'thumbnail-calendly-analytics-1.png', thumbnail2: 'thumbnail-calendly-analytics-2.png', metric1Big: '55%', metric1Description: 'Adoption', metric2Big: '93%', metric2Description: 'CSAT' },
  { slug: 'calendly-org-consolidation', company: 'Calendly', companyLogo: 'calendly.svg', title: 'Enterprise org consolidation tool', description: 'Built an internal tool that helped internal teams consolidate enterprise accounts, reducing overhead and customer frustration. Eliminated hours of weekly manual work for CSMs while retaining customers.', thumbnail1: 'thumbnail-calendly-org-consolidation-1.png', thumbnail2: 'thumbnail-calendly-org-consolidation-2.png', thumbnail3: 'thumbnail-calendly-org-consolidation-3.png', thumbnailExplode: true, metric1Big: '3hrs +', metric1Description: 'Time Saved per employee per week' },
  { slug: 'liveperson-taxonomy-annotation', company: 'LivePerson', companyLogo: 'liveperson.svg', title: 'Taxonomy annotation platform', description: 'Designed a high-efficiency annotation tool that improved labeling accuracy and sped up AI model training. Created a high-efficiency annotation tool to accelerate message labeling for model training.', thumbnail1: 'thumbnail-liveperson-1.png', thumbnail2: 'thumbnail-liveperson-2.png', metric1Big: '86%', metric1Description: 'Faster classification',  metric2Big: '–15%', metric2Description: 'Error rate',  },
]

export const portfolioComponentBySlug: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'asana': lazy(() => import('../portfolio/AsanaAccessControls')),
  'calendly-org-consolidation': lazy(() => import('../portfolio/CalendlyOrgConsolidation')),
  'calendly-analytics': lazy(() => import('../portfolio/CalendlyAnalytics')),
  'liveperson-taxonomy-annotation': lazy(() => import('../portfolio/LivepersonTaxonomyAnnotator')),
} 