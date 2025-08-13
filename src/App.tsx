import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { PasswordProvider } from './auth/PasswordProvider'
import Home from './pages/Home'
import PortfolioItemPage from './pages/PortfolioItemPage'
import NotFound from './pages/NotFound'
import SiteHeader from './components/SiteHeader'

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
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<PortfolioItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PasswordProvider>
  )
} 