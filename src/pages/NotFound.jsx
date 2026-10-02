import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-20">
      <p
        className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        404
      </p>
      <h1
        className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink mb-6"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Page not found
      </h1>
      <p className="text-base md:text-lg text-ink-muted mb-8 max-w-xl leading-relaxed">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-ink hover:bg-primary-900 text-bg font-medium px-6 py-3 rounded transition-colors text-sm"
      >
        Back to home
      </Link>
    </div>
  )
}
