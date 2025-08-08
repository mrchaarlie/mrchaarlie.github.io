import { Suspense, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PasswordGate from '../components/PasswordGate'
import { usePassword } from '../auth/PasswordProvider'
import { portfolioComponentBySlug } from '../data/portfolio'

export default function PortfolioItemPage() {
  const { slug = '' } = useParams()
  const navigate = useNavigate()
  const { isAuthed } = usePassword()
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    if (!slug) navigate('/')
  }, [slug, navigate])

  useEffect(() => {
    if (isAuthed) setUnlocked(true)
  }, [isAuthed])

  const ItemComponent = useMemo(() => (slug ? portfolioComponentBySlug[slug] : undefined), [slug])

  if (!ItemComponent) {
    return (
      <main>
        <p>Not found.</p>
      </main>
    )
  }

  if (!unlocked) {
    return (
      <main>
        <PasswordGate onSuccess={() => setUnlocked(true)} />
      </main>
    )
  }

  return (
    <main>
      <Suspense fallback={<p>Loading…</p>}>
        <ItemComponent />
      </Suspense>
    </main>
  )
} 