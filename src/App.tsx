import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { MainLayout } from './components/layout/MainLayout'
import { Home } from './pages/Home'
import { Reports } from './pages/Reports'
import { ReportDetail } from './pages/ReportDetail'
import { Statistics } from './pages/Statistics'
import { Gallery } from './pages/Gallery'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/reports/:id" element={<ReportDetail />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App