import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PersonaCards from '../components/PersonaCards'
import CurrentlyCard from '../components/CurrentlyCard'
import workSamples from '../data/workSamples'

const TYPEWRITER_LINES = [
  'I find the pattern',
  'I connect the dots',
  'I build the thing',
  'I ask better questions',
  'I make it make sense',
]

const ANIMATION_DURATION_MS = 10000

function useTypewriter(lines, { typingSpeed = 55, deletingSpeed = 30, pause = 1400, stopped = false } = {}) {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    if (stopped) return
    const currentLine = lines[lineIndex]
    let timeout

    if (phase === 'typing') {
      if (text.length < currentLine.length) {
        timeout = setTimeout(() => setText(currentLine.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentLine.slice(0, text.length - 1)), deletingSpeed)
      } else {
        timeout = setTimeout(() => {
          setLineIndex(i => (i + 1) % lines.length)
          setPhase('typing')
        }, deletingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, lineIndex, lines, typingSpeed, deletingSpeed, pause, stopped])

  // Once stopped, settle on the full line that was being typed
  return stopped ? lines[lineIndex] : text
}

const BLOBS = [
  { color: '#A78BFA', size: 'min(46vw, 520px)', top: '-8%', left: '2%', delay: '0s' },
  { color: '#67E8F9', size: 'min(40vw, 460px)', top: '8%', left: '62%', delay: '2s' },
  { color: '#FCA5A5', size: 'min(36vw, 420px)', top: '58%', left: '-4%', delay: '4s' },
  { color: '#5B9BD5', size: 'min(44vw, 500px)', top: '50%', left: '72%', delay: '6s' },
]

const FEATURED_IDS = [
  'f4b8c2a1-3d6e-4f89-9a12-7c5e0d8b4f21', // Ribbon
  '79e5f9fa-df72-4b98-b747-f567366fa0a3', // AWS
  'd6bf22d9-6a70-4824-b296-e3711205acf3', // ION Group
  '31dc1e29-3fa5-4177-a1aa-93d97280e9d5', // Biome
  '0b019b80-d3e1-4b25-b94b-2e319acf6f2f', // TacMed
  'a3f2c1d4-8e7b-4a96-b5f0-2d9e8c7f6a15', // Eulerity Pitch Agent
  '2c6f9b4d-8a1e-4d75-b3c9-6e0a4f8d2b57', // CLE Data Initiatives
]
const featuredStudies = FEATURED_IDS.map(id => workSamples.find(ws => ws.id === id))

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
  const [animationsStopped, setAnimationsStopped] = useState(false)
  const typedText = useTypewriter(TYPEWRITER_LINES, { stopped: animationsStopped })

  useEffect(() => {
    const timer = setTimeout(() => setAnimationsStopped(true), ANIMATION_DURATION_MS)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {/* Full-page animated background; pauses after 10 seconds */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        {BLOBS.map((blob, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-drift"
            style={{
              width: blob.size,
              height: blob.size,
              top: blob.top,
              left: blob.left,
              backgroundColor: blob.color,
              opacity: 0.18,
              animationDelay: blob.delay,
              animationPlayState: animationsStopped ? 'paused' : 'running',
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>

      {/* Hero */}
      <section
        className="relative min-h-[calc(100vh-10rem)] flex flex-col justify-center py-16 border-b border-border"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          {/* Hero text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary-600 mb-6">
              // ANISHA JAIN
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink mb-6 min-h-[1.4em]">
              {typedText}
              {!animationsStopped && <span className="animate-blink text-primary-500">|</span>}
            </h1>
            <p className="text-sm md:text-base text-primary-600 tracking-widest mb-8">
              systems · data · ai · builder
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/work-samples"
                className="bg-ink hover:bg-primary-900 text-bg font-medium px-6 py-3 rounded transition-colors text-sm"
              >
                see work →
              </Link>
              <a
                href="/anisha_jain_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-500 hover:bg-primary-50 text-primary-600 font-medium px-6 py-3 rounded transition-colors text-sm"
              >
                download cv
              </a>
            </div>
          </div>

          {/* Currently card */}
          <div className="w-full lg:w-auto shrink-0">
            <CurrentlyCard />
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12 border-b border-border">
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
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div ref={videoScrollRef} className="flex flex-1 gap-4 overflow-x-auto scrollbar-hide pb-4">

          {[
            { src: 'https://www.youtube.com/embed/WNzOsEB9d6A', title: 'Reason behind making this portfolio' },
            { src: 'https://www.youtube.com/embed/1qmIZZ_pXTI', title: 'What I Am Up To' },
            { src: 'https://www.youtube.com/embed/vtfnwN8w-KU', title: 'My 90 Day Plan Framework' },
            { src: 'https://www.youtube.com/embed/G9Bd1UQWZuU', title: 'A Real PM Tradeoff' },
          ].map(video => (
            <div key={video.src} className="w-44 sm:w-52 md:w-[380px] shrink-0">
              <div className="rounded-lg overflow-hidden border border-border w-full aspect-9/16">
                <iframe
                  src={video.src}
                  title={video.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p
                className="mt-3 text-base md:text-xl font-bold"
                style={{ fontFamily: 'var(--font-sans)', color: '#0b1a33' }}
              >
                {video.title}
              </p>
            </div>
          ))}

          </div>
          <button
            onClick={() => scrollVideos('right')}
            aria-label="Scroll right"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* Persona selector -- for repeat visitors switching context */}
      <section className="py-12 border-b border-border">
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
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div ref={workScrollRef} className="flex flex-1 gap-4 overflow-x-auto scrollbar-hide pb-4">
            {featuredStudies.map(ws => (
              <div key={ws.id} className="w-64 md:w-80 shrink-0 border border-border rounded-lg p-5 md:p-6 flex flex-col hover:border-primary-600 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p
                    className="text-xs font-medium tracking-widest uppercase text-primary-600"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {ws.company}
                  </p>
                  {ws.status && (
                    <span className="shrink-0 text-xs font-medium text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-2.5 py-0.5">
                      {ws.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink-muted mb-3 font-medium">{ws.role}</p>
                <p className="text-sm text-ink-muted leading-relaxed flex-1">{ws.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/work-sample/${ws.id}`}
                    state={{ from: pathname }}
                    className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    See full breakdown
                  </Link>
                  {ws.liveUrl && (
                    <a
                      href={ws.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      live →
                    </a>
                  )}
                  {ws.githubUrl && (
                    <a
                      href={ws.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      github →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollWork('right')}
            aria-label="Scroll right"
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border text-ink-muted hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-6">
          <Link
            to="/work-samples"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            View all work samples
          </Link>
        </div>
      </section>
    </div>
  )
}
