import { Link } from 'react-router-dom'

export default function CaseStudyCard({ company, role, summary, ctaTo, ctaLabel }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 flex flex-col hover:border-primary-600 transition-colors">
      <p
        className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-2"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {company}
      </p>
      <p className="text-sm text-gray-500 mb-3 font-medium">{role}</p>
      <p className="text-sm text-gray-700 leading-relaxed flex-1">{summary}</p>
      {ctaTo && (
        <Link
          to={ctaTo}
          className="mt-5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors self-start"
        >
          {ctaLabel || 'View details'}
        </Link>
      )}
    </div>
  )
}
