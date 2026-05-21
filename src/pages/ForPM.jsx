import ContactSection from '../components/ContactSection'

const povBlocks = [
  {
    title: 'Discovery is as important as development',
    body: 'Most teams underinvest in discovery because building feels like progress. But shipping the wrong thing with perfect execution is still the wrong thing. The hardest part of product is not developing a feature. It is figuring out which problem is actually worth solving before a single line of code is written.',
  },
  {
    title: 'Rapid prototyping is powerful, but systems make it faster',
    body: 'Moving fast is not the same as moving smart. Rapid prototyping gets you signal quickly, but without the underlying systems, every sprint starts from scratch. The teams that consistently ship well are the ones that invest in the infrastructure, processes, and shared context that make speed sustainable.',
  },
  {
    title: 'PMs need to think about technical feasibility and the road ahead',
    body: 'Product vision without technical grounding is just storytelling. In a world where AI, APIs, and infrastructure are changing what is buildable every few months, PMs who understand what is technically possible and what is coming next make better bets. You cannot roadmap the future if you do not understand the forces shaping it.',
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
          className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          I came here to build things that matter.
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          I care about discovery as much as delivery, systems as much as speed, and technical reality as much as product vision. If you think about product the same way, we should talk.
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
          My Product Pillars
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
            Anisha.OS is my personal operating system for how I live and work. Monthly quests, structured daily rhythms, and a habit of treating my own life like a product to iterate on. I built it because I think the best PMs are students of systems, including their own.
          </p>
          <span className="inline-block border border-gray-200 text-gray-400 font-medium px-6 py-3 rounded text-sm cursor-not-allowed">
            Coming Soon
          </span>
        </div>
      </section>

      <ContactSection
        email="anishajain765@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/anishajain98/"
      />
    </div>
  )
}
