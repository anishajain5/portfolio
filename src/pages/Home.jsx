import { useState, useRef } from 'react'
import PersonaOverlay from '../components/PersonaOverlay'
import PersonaCards from '../components/PersonaCards'
import CaseStudyGrid from '../components/CaseStudyGrid'

const STORAGE_KEY = 'portfolio_persona_seen'

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(
    !localStorage.getItem(STORAGE_KEY)
  )
  const videoScrollRef = useRef(null)

  function scrollVideos(direction) {
    if (!videoScrollRef.current) return
    videoScrollRef.current.scrollBy({
      left: direction === 'right' ? 400 : -400,
      behavior: 'smooth',
    })
  }

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
          I build products by building alignment first.
        </h1>
        <p
          className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Because the best roadmap means nothing if the room isn't behind it.
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

      {/* Videos */}
      <section className="py-12 border-b border-gray-200">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Watch
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-ink"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              [Video section heading placeholder]
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0 ml-4">
            <button
              onClick={() => scrollVideos('left')}
              aria-label="Scroll left"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scrollVideos('right')}
              aria-label="Scroll right"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div ref={videoScrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6">

          {/* Video 1 */}
          <div className="w-52 md:w-[380px] shrink-0">
            <div className="rounded-lg overflow-hidden border border-gray-200 w-full aspect-9/16">
              <iframe
                src="https://www.youtube.com/embed/vtfnwN8w-KU"
                title="My 90 Day Plan Framework"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p
              className="mt-3 text-sm font-medium text-ink"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              My 90 Day Plan Framework
            </p>
          </div>

          {/* Video 2 */}
          <div className="w-52 md:w-[380px] shrink-0">
            <div className="rounded-lg overflow-hidden border border-gray-200 w-full aspect-9/16">
              <iframe
                src="https://www.youtube.com/embed/G9Bd1UQWZuU"
                title="A Real PM Tradeoff"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p
              className="mt-3 text-sm font-medium text-ink"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              A Real PM Tradeoff
            </p>
          </div>

          {/* Placeholder 3 */}
          <div className="w-52 md:w-[380px] shrink-0">
            <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 w-full aspect-9/16 flex flex-col items-center justify-center gap-2">
              <p
                className="text-xs font-medium tracking-widest uppercase text-gray-400"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Coming soon
              </p>
            </div>
            <p
              className="mt-3 text-sm font-medium text-gray-400"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Video 3 coming soon
            </p>
          </div>

          {/* Placeholder 4 */}
          <div className="w-52 md:w-[380px] shrink-0">
            <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 w-full aspect-9/16 flex flex-col items-center justify-center gap-2">
              <p
                className="text-xs font-medium tracking-widest uppercase text-gray-400"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Coming soon
              </p>
            </div>
            <p
              className="mt-3 text-sm font-medium text-gray-400"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Video 4 coming soon
            </p>
          </div>

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
        <CaseStudyGrid />
      </section>
    </div>
  )
}
