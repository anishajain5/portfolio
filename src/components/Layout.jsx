import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work-samples', label: 'Work Samples' },
  { to: '/for/recruiter', label: 'For Recruiters' },
  { to: '/for/hiring-manager', label: 'For Hiring Managers' },
  { to: '/blog', label: 'Writing' },
]

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border sticky top-0 bg-surface z-10" style={{ fontFamily: 'var(--font-sans)' }}>
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-ink hover:text-primary-600 transition-colors shrink-0"
          >
            anisha.jain
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={[
                      'text-sm font-medium transition-colors no-underline',
                      isActive
                        ? 'text-primary-600 border-b-2 border-primary-600 pb-0.5'
                        : 'text-ink-muted hover:text-ink',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-surface">
            <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1 list-none m-0 p-0 py-4 px-6">
              {navLinks.map(({ to, label }) => {
                const isActive = pathname === to
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        'block py-3 text-sm font-medium transition-colors no-underline border-b border-border',
                        isActive ? 'text-primary-600' : 'text-ink-muted hover:text-ink',
                      ].join(' ')}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 md:px-6 py-8 md:py-12" style={{ fontFamily: 'var(--font-sans)' }}>
        {children}
      </main>

      <footer className="border-t border-border mt-auto" style={{ fontFamily: 'var(--font-sans)' }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-ink-muted">
          <span className="font-semibold text-ink">
            Anisha Jain, 2026
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:anishajain765@gmail.com"
              className="hover:text-primary-600 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anishajain98/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
