import { useState } from 'react'
import { Link } from 'react-router-dom'
import workSamples from '../data/workSamples'
import WorkSampleCard from '../components/WorkSampleCard'
import ContactSection from '../components/ContactSection'

const FEATURED_IDS = [
  'f4b8c2a1-3d6e-4f89-9a12-7c5e0d8b4f21', // Ribbon
  '79e5f9fa-df72-4b98-b747-f567366fa0a3', // AWS
  'd6bf22d9-6a70-4824-b296-e3711205acf3', // ION Group
  'a3f2c1d4-8e7b-4a96-b5f0-2d9e8c7f6a15', // Eulerity Pitch Agent
  '0b019b80-d3e1-4b25-b94b-2e319acf6f2f', // TacMed
  '31dc1e29-3fa5-4177-a1aa-93d97280e9d5', // Biome
]
const featuredStudies = FEATURED_IDS.map(id => workSamples.find(ws => ws.id === id))

const FILTERS = ['All', 'Product', 'Data and Analytics', 'Healthcare', 'Strategy', 'Independent']

const skills = [
  'Roadmap', 'GTM Execution', 'User Research', 'Systems Thinking', 'Stakeholder Management',
  'Spec Writing', 'Sprint Planning', 'Agile', 'SQL', 'Python', 'Power BI', 'DAX',
  'Power Automate', 'Tableau', 'Claude API', 'Azure OpenAI', 'Prompt Engineering', 'RAG',
  'LLM Evaluation', 'Jira', 'Confluence', 'Figma', 'Claude Code',
]

function FeaturedWorkSamples() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All'
    ? featuredStudies
    : featuredStudies.filter(ws => ws.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={[
              'px-4 py-1.5 text-sm font-medium rounded-full border transition-colors',
              active === f
                ? 'bg-primary-600 border-primary-600 text-white'
                : 'border-border text-ink-muted hover:border-primary-600 hover:text-primary-600',
            ].join(' ')}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(ws => (
          <WorkSampleCard
            key={ws.id}
            id={ws.id}
            company={ws.cardTitle ?? ws.company}
            role={ws.cardRole ?? ws.role}
            summary={ws.summary}
            bullets={ws.bullets}
            liveUrl={ws.liveUrl}
            githubUrl={ws.githubUrl}
            status={ws.status}
          />
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/work-samples"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          See all work samples
        </Link>
      </div>
    </div>
  )
}

export default function ForRecruiter() {
  return (
    <div>
      {/* One liner */}
      <section className="py-14 border-b border-border">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          For Recruiters
        </p>
        <h1
          className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          I find the pattern. Then I build the thing.
        </h1>
        <p className="text-lg text-ink-muted max-w-xl leading-relaxed">
          Data, AI, and systems thinking across AWS, ION Group, and Johns Hopkins.
        </p>
      </section>

      {/* Quick facts */}
      <section className="py-10 border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Availability
            </p>
            <p className="text-sm text-ink-muted font-medium">Available within 2 weeks</p>
            <p className="text-sm text-ink-muted mt-1">Open to full-time and contract roles</p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Location
            </p>
            <p className="text-sm text-ink-muted font-medium">Baltimore, MD | Open to relocation</p>
            <p className="text-sm text-ink-muted mt-1">Open to remote, hybrid, and on-site</p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Work Authorization
            </p>
            <p className="text-sm text-ink-muted font-medium">F1 on OPT. No sponsorship required until Feb 2029.</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-10 border-b border-border">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Skills
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm border border-border rounded-full text-ink-muted hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="py-10 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h2
            className="text-xl font-bold text-ink mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Resume
          </h2>
          <p className="text-sm text-ink-muted">Updated August 2026</p>
        </div>
        <a
          href="/anisha_jain_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded transition-colors text-sm self-start sm:self-auto"
        >
          Download resume
        </a>
      </section>

      {/* Work samples */}
      <section className="py-12 border-b border-border">
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
          Work Samples
        </h2>
        <FeaturedWorkSamples />
      </section>

      <ContactSection
        email="anishajain765@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/anishajain98/"
      />
    </div>
  )
}
