import ContactSection from '../components/ContactSection'

const povBlocks = [
  {
    title: '[POV title placeholder -- e.g. "Discovery is not a phase"]',
    body: '[POV body placeholder -- two to three sentences expanding on this opinion or principle. This is where your product philosophy goes.]',
  },
  {
    title: '[POV title placeholder -- e.g. "Roadmaps are arguments, not contracts"]',
    body: '[POV body placeholder -- two to three sentences expanding on this opinion or principle.]',
  },
  {
    title: '[POV title placeholder -- e.g. "The best spec is a working demo"]',
    body: '[POV body placeholder -- two to three sentences expanding on this opinion or principle.]',
  },
]

export default function ForPM() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          For PM Peers
        </p>
        <h1
          className="text-4xl md:text-6xl font-bold leading-none tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [Hero heading placeholder]
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          [Hero subtext placeholder -- one to two sentences for a PM peer audience.]
        </p>
      </section>

      {/* POV / How I think */}
      <section className="py-12 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          How I think
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-ink mb-10"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [POV section heading placeholder]
        </h2>
        <div className="divide-y divide-gray-100">
          {povBlocks.map((block, i) => (
            <div key={i} className="py-8 first:pt-0 last:pb-0">
              <h3
                className="text-lg md:text-xl font-bold text-ink mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {block.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-2xl text-sm md:text-base">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Anisha.OS callout */}
      <section className="py-12 border-b border-gray-200">
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 md:p-10">
          <p
            className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Side project
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-ink mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Anisha.OS
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-xl text-sm md:text-base">
            [Anisha.OS description placeholder -- two to three sentences on what it is, why you built it, and what it says about how you think as a PM.]
          </p>
          <a
            href="#"
            className="inline-block border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium px-6 py-3 rounded transition-colors text-sm"
          >
            Watch the video
          </a>
        </div>
      </section>

      <ContactSection
        email="placeholder@email.com"
        linkedinUrl="https://linkedin.com"
      />
    </div>
  )
}
