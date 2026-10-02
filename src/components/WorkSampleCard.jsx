import { Link, useLocation } from 'react-router-dom'

export function CardBullets({ bullets, summary }) {
  if (!bullets?.length) {
    return <p className="text-sm text-ink-muted leading-relaxed flex-1">{summary}</p>
  }
  return (
    <ul className="flex-1 list-none m-0 p-0 space-y-2">
      {bullets.map((bullet, i) => (
        <li key={i} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
          <span className="text-primary-600 shrink-0" aria-hidden="true">&bull;</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  )
}

export default function WorkSampleCard({ id, company, role, summary, bullets, liveUrl, githubUrl, status }) {
  const { pathname } = useLocation()

  return (
    <div className="border border-border bg-white/85 rounded-lg p-6 flex flex-col hover:border-primary-600 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {company}
        </p>
        {status && (
          <span className="shrink-0 text-xs font-medium text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-2.5 py-0.5">
            {status}
          </span>
        )}
      </div>
      <p className="text-sm text-ink-muted mb-3 font-medium">{role}</p>
      <CardBullets bullets={bullets} summary={summary} />
      {(id || liveUrl || githubUrl) && (
        <div className="mt-5 flex flex-wrap items-center gap-4">
          {id && (
            <Link
              to={`/work-sample/${id}`}
              state={{ from: pathname }}
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              See full breakdown
            </Link>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              live →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              github →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
