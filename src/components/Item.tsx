import { Link } from 'react-router-dom'
import AsanaLogo from './logos/AsanaLogo'

type ItemProps = {
  to: string
  company: string
  companyLogo: string
  title: string
  thumbnail1: string
  thumbnail2?: string
  thumbnail3?: string
  thumbnailExplode?: boolean
  description: string
  metric1Big: string
  metric1Description: string
  metric2Big?: string
  metric2Description?: string
  metric3Big?: string
  metric3Description?: string
  index?: number
  onClick?: (e: React.MouseEvent) => void
}

export default function Item({ to, company, companyLogo, title, description, thumbnail1, thumbnail2, thumbnail3, thumbnailExplode = false, metric1Big, metric1Description, metric2Big, metric2Description, metric3Big, metric3Description, index = 0, onClick }: ItemProps) {
  const isReverse = index % 2 === 1
  const renderLogo = () => {
    if (companyLogo === 'asana.svg') {
      return <AsanaLogo className="asana-logo" width={120} height={24} />
    }
    return <img src={`/images/logos/${companyLogo}`} alt={`${company} logo`} loading="lazy" decoding="async" />
  }
  const extraClass = thumbnailExplode ? ' thumbnail-explode' : ''
  const isFirstRow = index <= 1

  function prefetchWorkChunk() {
    // Hint bundler to prefetch the work page chunk
    import('../pages/PortfolioItemPage').catch(() => {})
  }

  return (
    <div className={`portfolio-item${isReverse ? ' reverse' : ''}`} onMouseEnter={prefetchWorkChunk}>
      <div className="thumbnails">
        <img src={`/images/portfolio/${thumbnail1}`} alt={`Image for ${title} case study`} className={`thumbnail thumbnail-1${extraClass}`} loading={isFirstRow ? 'eager' : 'lazy'} fetchPriority={isFirstRow ? 'high' : 'auto'} decoding="async" />
        {thumbnail2 && <img src={`/images/portfolio/${thumbnail2}`} alt={`Image for ${title} case study`} className={`thumbnail thumbnail-2${extraClass}`} loading="lazy" decoding="async" />}
        {thumbnail3 && <img src={`/images/portfolio/${thumbnail3}`} alt={`Image for ${title} case study`} className={`thumbnail thumbnail-3${extraClass}`} loading="lazy" decoding="async" />}
      </div>
      <div className="content">
        <div className="company-logo">{renderLogo()}</div>
        <h3 className="case-study-title">{title}</h3>
        <p className="case-study-description">{description}</p>
        <Link to={to} className="button button--primary" onClick={onClick}>Read more</Link>
        <div className="metrics">
          <div className="metric">
            <div className="metric-big">{metric1Big}</div>
            <div className="metric-label">{metric1Description}</div>
          </div>
          {metric2Big && (
            <div className="metric">
              <div className="metric-big">{metric2Big}</div>
              <div className="metric-label">{metric2Description}</div>
            </div>
          )}
          {metric3Big && (
            <div className="metric">
              <div className="metric-big">{metric3Big}</div>
              <div className="metric-label">{metric3Description}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 