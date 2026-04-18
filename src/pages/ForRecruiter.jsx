import CaseStudyGrid from '../components/CaseStudyGrid'
import ContactSection from '../components/ContactSection'

const skills = [
  '[Skill placeholder]',
  '[Skill placeholder]',
  '[Skill placeholder]',
  '[Skill placeholder]',
  '[Skill placeholder]',
  '[Skill placeholder]',
]

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
          [One liner placeholder]
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          [Brief positioning statement placeholder -- one sentence.]
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
            <p className="text-sm text-gray-700 font-medium">[Available from placeholder]</p>
            <p className="text-sm text-gray-500 mt-1">[Open to full-time / contract placeholder]</p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Location
            </p>
            <p className="text-sm text-gray-700 font-medium">[Location placeholder]</p>
            <p className="text-sm text-gray-500 mt-1">[Remote / hybrid / on-site preference placeholder]</p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Work Authorization
            </p>
            <p className="text-sm text-gray-700 font-medium">[Visa status placeholder]</p>
            <p className="text-sm text-gray-500 mt-1">[Sponsorship needed yes/no placeholder]</p>
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
          <p className="text-sm text-gray-500">[Updated placeholder date]</p>
        </div>
        <a
          href="#"
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
          [Case studies heading placeholder]
        </h2>
        <CaseStudyGrid />
      </section>

      <ContactSection
        email="placeholder@email.com"
        linkedinUrl="https://linkedin.com"
      />
    </div>
  )
}
