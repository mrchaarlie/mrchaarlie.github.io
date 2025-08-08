import { lazy } from 'react'

export type PortfolioItem = {
  slug: string
  title: string
  description?: string
}

export const portfolioItems: PortfolioItem[] = [
  { slug: 'case-study-one', title: 'Case Study One', description: 'A redesign of XYZ app.' },
  { slug: 'case-study-two', title: 'Case Study Two', description: 'Design system exploration.' },
]

export const portfolioComponentBySlug: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  'case-study-one': lazy(() => import('../portfolio/CaseStudyOne')),
  'case-study-two': lazy(() => import('../portfolio/CaseStudyTwo')),
} 