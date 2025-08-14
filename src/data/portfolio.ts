import { lazy } from 'react'

export type PortfolioItem = {
  slug: string
  title: string
  description?: string
}

export const portfolioItems: PortfolioItem[] = [
  { slug: 'asana', title: 'Asana Access Controls', description: 'Architected scalable custom field permissions, improving security, adoption, and governance across Asana’s platform. Adopted by 99% of top enterprise customers, improving retention.' },
  { slug: 'calendly-analytics', title: 'Calendly Analytics', description: 'Designed a 0–1 analytics feature that empowered admins with data-driven scheduling insights. Achieved 55% adoption and improved customer retention.' },
  { slug: 'calendly-org-consolidation', title: 'Calendly Org Consolidation', description: 'Delivered an end-to-end flow to consolidate enterprise accounts, reducing admin overhead and onboarding friction. Saved CSMs hours of work weekly.' },
  { slug: 'liveperson-taxonomy-annotation', title: 'LivePerson Taxonomy Annotation', description: 'Created a high-efficiency annotation tool to accelerate message labeling for model training. Achieved 86% faster classification, 26% faster task completion, and a 15% drop in errors.' },
]

export const portfolioComponentBySlug: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'asana': lazy(() => import('../portfolio/AsanaAccessControls')),
  'calendly-org-consolidation': lazy(() => import('../portfolio/CalendlyOrgConsolidation')),
  'calendly-analytics': lazy(() => import('../portfolio/CalendlyAnalytics')),
  'liveperson-taxonomy-annotation': lazy(() => import('../portfolio/LivepersonTaxonomyAnnotator')),
} 