import { useState } from 'react'
import PersonaOverlay from '../components/PersonaOverlay'

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

      {/* Hero section -- display typography showcase */}
      <section className="py-16 border-b border-gray-200">
        <p
          className="text-sm font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Product Manager
        </p>
        <h1
          className="text-7xl font-bold leading-none tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [Heading placeholder]
        </h1>
        <p
          className="text-xl text-gray-500 max-w-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          [Subheading placeholder -- one to two sentences about who you are and what you do.]
        </p>
        <div className="mt-10 flex items-center gap-4">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded transition-colors">
            [Primary CTA placeholder]
          </button>
          <button className="border border-gray-300 hover:border-primary-600 hover:text-primary-600 text-gray-700 font-medium px-6 py-3 rounded transition-colors">
            [Secondary CTA placeholder]
          </button>
        </div>
      </section>

      {/* Highlight reel section */}
      <section className="py-12">
        <h2
          className="text-2xl font-bold text-ink mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [Highlight reel placeholder]
        </h2>
        <p className="text-gray-500">[Hook video placeholder]</p>
        <p className="text-gray-500 mt-4">[Self-select buttons placeholder]</p>
      </section>
    </div>
  )
}
