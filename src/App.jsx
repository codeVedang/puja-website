import { Navigate, Route, Routes } from 'react-router-dom'

import { AppShell } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PujaDetailPage } from './pages/PujaDetailPage'
import { PujaPage } from './pages/PujaPage'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puja" element={<PujaPage />} />
        <Route path="/puja/:slug" element={<PujaDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}

export default App
