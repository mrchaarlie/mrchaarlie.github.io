import { Link } from 'react-router-dom'

type CardProps = {
  to: string
  title: string
  description?: string
}

export default function Card({ to, title, description }: CardProps) {
  return (
    <Link to={to} className="card">
      <div className="thumb">Thumbnail</div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </Link>
  )
} 