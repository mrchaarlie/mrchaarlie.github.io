import { Link } from 'react-router-dom'

type ItemProps = {
  to: string
  company: string
  companyLogo: string
  title: string
  thumbnail: string
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

export default function Item({ to, company, companyLogo, title, description, thumbnail, metric1Big, metric1Description, metric2Big, metric2Description, metric3Big, metric3Description, index = 0, onClick }: ItemProps) {
  const isReverse = index % 2 === 1
  return (
    <div className={`portfolio-item${isReverse ? ' reverse' : ''}`}>
      <div className="thumb"><img src={`/images/portfolio/${thumbnail}`} alt={`Image for ${title} case study`} /></div>
      <div className="content">
        <div className="company-logo"><img src={`/images/logos/${companyLogo}`} alt={`${company} logo`} /></div>
        <h3 className="case-study-title">{title}</h3>
        <p className="case-study-description">{description}</p>
        <Link to={to} className="button" onClick={onClick}>Read more</Link>
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