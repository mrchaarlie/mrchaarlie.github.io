import { Route, Routes } from 'react-router-dom'
import { PasswordProvider } from './auth/PasswordProvider'
import Home from './pages/Home'
import PortfolioItemPage from './pages/PortfolioItemPage'
import NotFound from './pages/NotFound'
import SiteHeader from './components/SiteHeader'

export default function App() {
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