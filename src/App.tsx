import { Route, Routes } from 'react-router-dom'
import { PasswordProvider } from './auth/PasswordProvider'
import Home from './pages/Home'
import PortfolioItemPage from './pages/PortfolioItemPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <PasswordProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<PortfolioItemPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PasswordProvider>
  )
} 