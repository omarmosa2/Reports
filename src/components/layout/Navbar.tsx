import { Link, useLocation } from 'react-router-dom'
import { Home, FileText, BarChart3, Image, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'الرئيسية', labelEn: 'Home', icon: Home },
    { path: '/reports', label: 'التقارير', labelEn: 'Reports', icon: FileText },
    { path: '/gallery', label: 'معرض الصور', labelEn: 'Gallery', icon: Image },
    { path: '/statistics', label: 'الإحصائيات', labelEn: 'Statistics', icon: BarChart3 }
  ]

  return (
    <nav className="sticky top-0 z-50 bg-primary backdrop-blur-lg border-b border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--dark-accent))' }}
            >
              <FileText className="w-6 h-6 text-white" style={{ color: 'white' }} />
            </div>
            <span className="text-xl font-bold text-primary">تقارير العمليات</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-secondary hover:text-accent hover:bg-secondary'
                  }`}
                >
                  <Icon className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
                  <span className="font-medium hidden sm:inline">{item.label}</span>
                </Link>
              )
            })}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-secondary hover:bg-secondary transition-all"
              aria-label="تبديل الثيم"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
              ) : (
                <Sun className="w-5 h-5" style={{ width: '20px', height: '20px' }} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}