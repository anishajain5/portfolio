import { useState } from 'react'
import PersonaOverlay from '../components/PersonaOverlay'
import PersonaCards from '../components/PersonaCards'
import CaseStudyGrid from '../components/CaseStudyGrid'

const STORAGE_KEY = 'portfolio_persona_seen'

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(
    !localStorage.getItem(STORAGE_KEY)
  )

  return (
    <div>
      {showOverlay && (
        <PersonaOverlay onSkip={() => setShowOverlay(false)} />
      )}

      {/* Hero */}
      <section className="py-16 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Product Manager
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold leading-none tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [Heading placeholder]
        </h1>
        <p
          className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          [Subheading placeholder -- one to two sentences about who you are and what you do.]
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded transition-colors text-sm">
            [Primary CTA placeholder]
          </button>
          <button className="border border-gray-300 hover:border-primary-600 hover:text-primary-600 text-gray-700 font-medium px-6 py-3 rounded transition-colors text-sm">
            [Secondary CTA placeholder]
          </button>
        </div>
      </section>

      {/* Persona selector -- for repeat visitors switching context */}
      <section className="py-12 border-b border-gray-200">
        <PersonaCards />
      </section>

      {/* Highlight reel */}
      <section className="py-12">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Work
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-ink mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [Highlight reel heading placeholder]
        </h2>
        <CaseStudyGrid ctaTo="/for/recruiter" ctaLabel="See full breakdown" />
      </section>
    </div>
  )
}
