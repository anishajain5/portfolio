import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import caseStudies from '../data/caseStudies'
import CaseStudyCard from '../components/CaseStudyCard'
import ContactSection from '../components/ContactSection'

const FEATURED_IDS = [
  '79e5f9fa-df72-4b98-b747-f567366fa0a3', // AWS
  'd6bf22d9-6a70-4824-b296-e3711205acf3', // ION Group
  '31dc1e29-3fa5-4177-a1aa-93d97280e9d5', // Biome
  '0b019b80-d3e1-4b25-b94b-2e319acf6f2f', // TacMed
]
const featuredStudies = FEATURED_IDS.map(id => caseStudies.find(cs => cs.id === id))

const FILTERS = ['All', 'Product', 'Data and Analytics', 'Healthcare', 'Strategy', 'Independent']

const skills = ['Roadmap', 'GTM Execution', 'User Research', 'SQL', 'Power BI', 'Claude Code']

function FeaturedCaseStudies() {
  const [active, setActive] = useState('All')
  const { pathname } = useLocation()
  const filtered = active === 'All'
    ? featuredStudies
    : featuredStudies.filter(cs => cs.category === active)

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
                : 'border-gray-200 text-gray-500 hover:border-primary-600 hover:text-primary-600',
            ].join(' ')}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(cs => (
          <CaseStudyCard
            key={cs.id}
            id={cs.id}
            company={cs.company}
            role={cs.role}
            summary={cs.summary}
          />
        ))}
      </div>
      <div className="mt-6">
        <Link
          to="/case-studies"
          className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
        >
          See all case studies
        </Link>
      </div>
    </div>
  )
}

export default function ForRecruiter() {
  return (
    <div>
      {/* One liner */}
      <section className="py-14 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          For Recruiters
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold leading-none tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          I build products by building alignment first. Because the best roadmap means nothing if the room isn't behind it.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Data-native PM with 3+ years building products across enterprise security, fintech, and higher education.
        </p>
      </section>

      {/* Quick facts */}
      <section className="py-10 border-b border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Availability
            </p>
            <p className="text-sm text-gray-700 font-medium">Available immediately</p>
            <p className="text-sm text-gray-500 mt-1">Open to full-time and contract roles</p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Location
            </p>
            <p className="text-sm text-gray-700 font-medium">Baltimore, MD | Open to relocation</p>
            <p className="text-sm text-gray-500 mt-1">Open to remote, hybrid, and on-site</p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Work Authorization
            </p>
            <p className="text-sm text-gray-700 font-medium">F1 on OPT, no sponsorship required until Feb 2029</p>
            <p className="text-sm text-gray-500 mt-1">No sponsorship required</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-10 border-b border-gray-200">
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
              className="px-4 py-2 text-sm border border-gray-200 rounded-full text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="py-10 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h2
            className="text-xl font-bold text-ink mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Resume
          </h2>
          <p className="text-sm text-gray-500">Updated May 2026</p>
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

      {/* Case studies */}
      <section className="py-12 border-b border-gray-200">
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
        <FeaturedCaseStudies />
      </section>

      <ContactSection
        email="anishajain765@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/anishajain98/"
      />
    </div>
  )
}
