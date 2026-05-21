import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PersonaCards from '../components/PersonaCards'
import caseStudies from '../data/caseStudies'

const FEATURED_IDS = [
  '79e5f9fa-df72-4b98-b747-f567366fa0a3', // AWS
  'd6bf22d9-6a70-4824-b296-e3711205acf3', // ION Group
  '31dc1e29-3fa5-4177-a1aa-93d97280e9d5', // Biome
  '0b019b80-d3e1-4b25-b94b-2e319acf6f2f', // TacMed
]
const featuredStudies = FEATURED_IDS.map(id => caseStudies.find(cs => cs.id === id))

export default function Home() {
  const videoScrollRef = useRef(null)
  const workScrollRef = useRef(null)

  function scrollVideos(direction) {
    if (!videoScrollRef.current) return
    videoScrollRef.current.scrollBy({
      left: direction === 'right' ? 400 : -400,
      behavior: 'smooth',
    })
  }

  function scrollWork(direction) {
    if (!workScrollRef.current) return
    workScrollRef.current.scrollBy({
      left: direction === 'right' ? 400 : -400,
      behavior: 'smooth',
    })
  }

  const { pathname } = useLocation()

  return (
    <div>
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
          <Link
            to="/case-studies"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded transition-colors text-sm"
          >
            See My Work
          </Link>
          <a
            href="/anisha_jain_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 hover:border-primary-600 hover:text-primary-600 text-gray-700 font-medium px-6 py-3 rounded transition-colors text-sm"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12 border-b border-gray-200">
        <div className="mb-8">
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
            In My Own Words
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollVideos('left')}
            aria-label="Scroll left"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div ref={videoScrollRef} className="flex flex-1 gap-4 overflow-x-auto scrollbar-hide pb-4">

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
          <button
            onClick={() => scrollVideos('right')}
            aria-label="Scroll right"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* Persona selector -- for repeat visitors switching context */}
      <section className="py-12 border-b border-gray-200">
        <PersonaCards />
      </section>

      {/* Highlight reel */}
      <section id="work" className="py-12">
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
          Data-native PM with 3+ years of experience across enterprise security, fintech, and higher education. Built products at AWS, ION Group, and Johns Hopkins that moved the needle on retention, security, and operational efficiency.
        </h2>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollWork('left')}
            aria-label="Scroll left"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div ref={workScrollRef} className="flex flex-1 gap-4 overflow-x-auto scrollbar-hide pb-4">
            {featuredStudies.map(cs => (
              <div key={cs.id} className="w-64 md:w-80 shrink-0 border border-gray-200 rounded-lg p-6 flex flex-col hover:border-primary-600 transition-colors">
                <p
                  className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cs.company}
                </p>
                <p className="text-sm text-gray-500 mb-3 font-medium">{cs.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed flex-1">{cs.summary}</p>
                <Link
                  to={`/case-study/${cs.id}`}
                  state={{ from: pathname }}
                  className="mt-5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors self-start"
                >
                  See full breakdown
                </Link>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollWork('right')}
            aria-label="Scroll right"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <Link
            to="/case-studies"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            View all case studies
          </Link>
        </div>
      </section>
    </div>
  )
}
