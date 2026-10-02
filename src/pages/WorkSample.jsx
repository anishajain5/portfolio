import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { findWorkSample } from '../data/workSamples'

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
    <section className="py-8 border-b border-border last:border-0">
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


export default function WorkSample() {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const backTo = state?.from ?? '/'

  const ws = findWorkSample(id)

  if (!ws) {
    return (
      <div className="py-20 text-center">
        <p className="text-ink-muted mb-4">Work sample not found.</p>
        <button
          onClick={() => navigate(backTo)}
          className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
        >
          Go back
        </button>
      </div>
    )
  }

  const approachSegments = parseApproach(ws.approach)

  return (
    <div className="max-w-2xl py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(backTo)}
        className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
        Back
      </button>

      {/* Header */}
      <div className="mb-10 pb-10 border-b border-border">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {ws.company}
        </p>
        <p className="text-sm text-ink-muted mb-5 font-medium">{ws.role}</p>
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {ws.title}
        </h1>
        <p className="text-base md:text-lg text-ink-muted leading-relaxed">
          {ws.summary}
        </p>
      </div>

      {/* Sections */}
      <Section label="Problem">
        <p className="text-ink-muted leading-relaxed text-sm md:text-base">{ws.problem}</p>
      </Section>

      <Section label="Approach">
        <div className="space-y-4">
          {approachSegments.map((seg, i) =>
            seg.type === 'para' ? (
              <p key={i} className="text-ink-muted leading-relaxed text-sm md:text-base">
                {seg.text}
              </p>
            ) : (
              <ul key={i} className="space-y-2 pl-0 list-none">
                {seg.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm md:text-base text-ink-muted leading-relaxed">
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
        <p className="text-ink-muted leading-relaxed text-sm md:text-base">{ws.outcome}</p>
      </Section>

      {ws.learned && (
        <Section label="What I learned">
          <div className="bg-primary-50 border border-primary-100 rounded-lg px-6 py-5">
            <p className="text-ink-muted leading-relaxed text-sm md:text-base italic">
              {ws.learned}
            </p>
          </div>
        </Section>
      )}

      {/* Footer nav */}
      <div className="pt-10 mt-4">
        <button
          onClick={() => navigate(backTo)}
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
          Back
        </button>
      </div>
    </div>
  )
}
