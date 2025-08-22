import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { PasswordProvider } from './auth/PasswordProvider'
const Home = lazy(() => import('./pages/Home'))
const PortfolioItemPage = lazy(() => import('./pages/PortfolioItemPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
import SiteHeader from './components/SiteHeader'
import ChatWidget from './components/ChatWidget'

function HeaderSwitcher() {
  const location = useLocation()
  const isPortfolio = /^\/work\//.test(location.pathname)
  if (isPortfolio) return null
  return <SiteHeader />
}

export default function App() {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored)
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [])

  return (
    <PasswordProvider>
      <HeaderSwitcher />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<PortfolioItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ChatWidget />
    </PasswordProvider>
  )
} 