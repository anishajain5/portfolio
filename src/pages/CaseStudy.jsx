import { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { fetchCaseStudy } from '../lib/supabase'

function parseApproach(text) {
  if (!text) return []
  const segments = []
  let currentBullets = []

  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (trimmed.startsWith('- ')) {
      currentBullets.push(trimmed.slice(2))
    } else {
      if (currentBullets.length > 0) {
        segments.push({ type: 'bullets', items: currentBullets })
        currentBullets = []
      }
      if (trimmed) {
        segments.push({ type: 'para', text: trimmed })
      }
    }
  }

  if (currentBullets.length > 0) {
    segments.push({ type: 'bullets', items: currentBullets })
  }

  return segments
}

function Section({ label, children }) {
  return (
    <section className="py-8 border-b border-gray-100 last:border-0">
      <p
        className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-4"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {label}
      </p>
      {children}
    </section>
  )
}

function SkeletonDetail() {
  return (
    <div className="animate-pulse">
      <div className="h-3 bg-gray-100 rounded w-32 mb-8" />
      <div className="h-3 bg-gray-100 rounded w-40 mb-4" />
      <div className="h-10 bg-gray-100 rounded w-3/4 mb-3" />
      <div className="h-10 bg-gray-100 rounded w-1/2 mb-8" />
      <div className="space-y-3 mb-10">
        <div className="h-3 bg-gray-100 rounded w-full" />
        <div className="h-3 bg-gray-100 rounded w-5/6" />
        <div className="h-3 bg-gray-100 rounded w-4/6" />
      </div>
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="py-8 border-b border-gray-100">
          <div className="h-3 bg-gray-100 rounded w-20 mb-4" />
          <div className="space-y-2">
            <div className="h-3 bg-gray-100 rounded w-full" />
            <div className="h-3 bg-gray-100 rounded w-5/6" />
            <div className="h-3 bg-gray-100 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CaseStudy() {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const backTo = state?.from ?? '/'

  const [cs, setCs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCaseStudy(id)
      .then(data => setCs(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="max-w-2xl py-10">
        <SkeletonDetail />
      </div>
    )
  }

  if (error || !cs) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400 mb-4">Case study not found.</p>
        <button
          onClick={() => navigate(backTo)}
          className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
        >
          Go back
        </button>
      </div>
    )
  }

  const approachSegments = parseApproach(cs.approach)

  return (
    <div className="max-w-2xl py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-ink transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
        Back
      </button>

      {/* Header */}
      <div className="mb-10 pb-10 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {cs.company}
        </p>
        <p className="text-sm text-gray-500 mb-5 font-medium">{cs.role}</p>
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {cs.title}
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          {cs.summary}
        </p>
      </div>

      {/* Sections */}
      <Section label="Problem">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{cs.problem}</p>
      </Section>

      <Section label="Approach">
        <div className="space-y-4">
          {approachSegments.map((seg, i) =>
            seg.type === 'para' ? (
              <p key={i} className="text-gray-700 leading-relaxed text-sm md:text-base">
                {seg.text}
              </p>
            ) : (
              <ul key={i} className="space-y-2 pl-0 list-none">
                {seg.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="text-primary-600 mt-1 shrink-0">--</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </Section>

      <Section label="Outcome">
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{cs.outcome}</p>
      </Section>

      {cs.learned && (
        <Section label="What I learned">
          <div className="bg-primary-50 border border-primary-100 rounded-lg px-6 py-5">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base italic">
              {cs.learned}
            </p>
          </div>
        </Section>
      )}

      {/* Footer nav */}
      <div className="pt-10 mt-4">
        <button
          onClick={() => navigate(backTo)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-ink transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
          Back
        </button>
      </div>
    </div>
  )
}
