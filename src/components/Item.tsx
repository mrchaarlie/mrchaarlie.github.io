import { Link } from 'react-router-dom'

type ItemProps = {
  to: string
  title: string
  description?: string
  index?: number
  onClick?: (e: React.MouseEvent) => void
}

export default function Item ({ to, title, description, index = 0, onClick }: ItemProps) {
  const isReverse = index % 2 === 1
  return (
    <Link to={to} className={`portfolio-item${isReverse ? ' reverse' : ''}`} onClick={onClick}>
      <div className="thumb">Thumbnail</div>
      <div className="content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </Link>
  )
} 