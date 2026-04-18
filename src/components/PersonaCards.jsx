import { Link } from 'react-router-dom'

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

export default function PersonaCards() {
  return (
    <section className="bg-ink rounded-xl px-8 py-12 md:py-14">
      <p
        className="text-xs font-medium tracking-widest uppercase text-primary-500 mb-4"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Navigate by role
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Where do you want to go?
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {personas.map((persona) => (
          <Link
            key={persona.key}
            to={persona.to}
            className="
              flex-1 border border-white/20 rounded-lg px-6 py-6
              hover:border-primary-500 hover:bg-primary-900/20
              transition-colors group no-underline
            "
          >
            <span
              className="block text-lg font-bold text-white group-hover:text-primary-400 mb-2 transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {persona.label}
            </span>
            <span className="block text-sm text-white/50 leading-relaxed">
              {persona.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
