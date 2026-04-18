import { useNavigate } from 'react-router-dom'

const personas = [
  {
    key: 'recruiter',
    label: 'I am a recruiter',
    description: 'Skills, availability, and resume download',
    to: '/for/recruiter',
  },
  {
    key: 'hiring-manager',
    label: 'I am a hiring manager',
    description: 'Product thinking and a 90 day plan',
    to: '/for/hiring-manager',
  },
  {
    key: 'pm',
    label: 'I am a PM',
    description: 'POV, opinions, and the Anisha.OS build story',
    to: '/for/pm',
  },
]

const STORAGE_KEY = 'portfolio_persona_seen'

export default function PersonaOverlay({ onSkip }) {
  const navigate = useNavigate()

  function handleSelect(persona) {
    localStorage.setItem(STORAGE_KEY, persona.key)
    navigate(persona.to)
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink px-6">
      <p
        className="text-sm font-medium tracking-widest uppercase text-primary-500 mb-6"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Welcome
      </p>
      <h2
        className="text-5xl font-bold text-white text-center leading-tight mb-16 max-w-lg"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Who are you?
      </h2>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
        {personas.map((persona) => (
          <button
            key={persona.key}
            onClick={() => handleSelect(persona)}
            className="
              flex-1 text-left border border-white/20 rounded-lg px-8 py-8
              hover:border-primary-500 hover:bg-primary-900/30
              transition-colors group cursor-pointer
            "
          >
            <span
              className="block text-2xl font-bold text-white group-hover:text-primary-400 mb-3 transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {persona.label}
            </span>
            <span className="block text-sm text-white/50 leading-relaxed">
              {persona.description}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={onSkip}
        className="mt-10 text-sm text-white/30 hover:text-white/60 transition-colors cursor-pointer"
      >
        Just browsing
      </button>
    </div>
  )
}
