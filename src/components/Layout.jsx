import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/for/recruiter', label: 'For Recruiters' },
  { to: '/for/hiring-manager', label: 'For Hiring Managers' },
  { to: '/for/pm', label: 'For PMs' },
]

export default function Layout({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-ink hover:text-primary-600 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            [Site Name]
          </Link>
          <ul className="flex items-center gap-8 list-none m-0 p-0">
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
                        : 'text-gray-500 hover:text-ink',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        {children}
      </main>

      <footer className="border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-500">
          <span style={{ fontFamily: 'var(--font-display)' }} className="font-semibold text-ink">
            [Site Name]
          </span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:placeholder@email.com"
              className="hover:text-primary-600 transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
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
