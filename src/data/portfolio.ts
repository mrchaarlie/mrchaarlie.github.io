import { lazy } from 'react'

export type PortfolioItem = {
  slug: string
  company: string
  companyLogo: string
  title: string
  thumbnail: string
  metric1Big: string
  metric1Description: string
  metric2Big: string
  metric2Description: string
  description: string
}

export const portfolioItems: PortfolioItem[] = [
  { slug: 'asana', company: 'Asana', companyLogo: 'asana.svg', title: 'Asana Access Controls', thumbnail: 'thumbnail-1.avif', metric1Big: '99%', metric1Description: 'Adoption', metric2Big: '100%', metric2Description: 'Retention', description: 'Architected scalable custom field permissions, improving security, adoption, and governance across Asana’s platform. Adopted by 99% of top enterprise customers, improving retention.' },
  { slug: 'calendly-analytics',  company: 'Calendly', companyLogo: 'calendly.svg', title: 'Calendly Analytics', thumbnail: 'thumbnail-1.avif', metric1Big: '55%', metric1Description: 'Adoption', metric2Big: '100%', metric2Description: 'Retention', description: 'Designed a 0–1 analytics feature that empowered admins with data-driven scheduling insights. Achieved 55% adoption and improved customer retention.' },
  { slug: 'calendly-org-consolidation', company: 'Calendly', companyLogo: 'calendly.svg', title: 'Calendly Org Consolidation', thumbnail: 'thumbnail-1.avif', metric1Big: '100%', metric1Description: 'Time Saved', metric2Big: '100%', metric2Description: 'Retention', description: 'Delivered an end-to-end flow to consolidate enterprise accounts, reducing admin overhead and onboarding friction. Saved CSMs hours of work weekly.' },
  { slug: 'liveperson-taxonomy-annotation', company: 'LivePerson', companyLogo: 'liveperson.svg', title: 'LivePerson Taxonomy Annotation', thumbnail: 'thumbnail-1.avif', metric1Big: '86%', metric1Description: 'Speed', metric2Big: '15%', metric2Description: 'Accuracy', description: 'Created a high-efficiency annotation tool to accelerate message labeling for model training. Achieved 86% faster classification, 26% faster task completion, and a 15% drop in errors.' },
]

export const portfolioComponentBySlug: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'asana': lazy(() => import('../portfolio/AsanaAccessControls')),
  'calendly-org-consolidation': lazy(() => import('../portfolio/CalendlyOrgConsolidation')),
  'calendly-analytics': lazy(() => import('../portfolio/CalendlyAnalytics')),
  'liveperson-taxonomy-annotation': lazy(() => import('../portfolio/LivepersonTaxonomyAnnotator')),
} 