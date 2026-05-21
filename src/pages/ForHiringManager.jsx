import PlanPhaseBlock from '../components/PlanPhaseBlock'
import CaseStudyGrid from '../components/CaseStudyGrid'
import ContactSection from '../components/ContactSection'

const planPhases = [
  {
    id: 1,
    phase: 'Days 1 to 30',
    title: 'Listen and Map',
    description: 'The first thirty days are not about shipping. They are about developing genuine understanding of the product, the team, and the customers before forming any conclusions. This means sitting in on calls, reading documentation, and asking questions that might feel too basic to ask. The objective is not to arrive with answers but to build a foundation of context that makes every subsequent decision more grounded.',
  },
  {
    id: 2,
    phase: 'Days 31 to 60',
    title: 'Focus and Align',
    description: 'By day thirty-one, there is enough signal to make a meaningful bet. The focus narrows to one problem: not the most visible issue, not the one with the loudest advocate, but the one with the highest leverage given what was learned in month one. This phase is about going deep, securing alignment from the people who need to be behind the decision, and beginning to move. The roadmap takes shape here, not before.',
  },
  {
    id: 3,
    phase: 'Days 61 to 90',
    title: 'Ship and Learn',
    description: 'Something ships within the first ninety days. Not because it is the most critical item on the roadmap, but because shipping builds trust, and trust is what enables the more ambitious work that follows. The deliverable is deliberately scoped: concrete enough to be real, focused enough to be done well. The goal is to demonstrate the full arc from alignment to execution, and to open the feedback loop that will inform everything ahead.',
  },
]

export default function ForHiringManager() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-6"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          For Hiring Managers
        </p>
        <h1
          className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          I build products by building alignment first. Because the best roadmap means nothing if the room isn't behind it.
        </h1>
      </section>

      {/* 90 day plan */}
      <section className="py-12 border-b border-gray-200">
        <p
          className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          90 Day Plan
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold text-ink mb-10"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          How I Show Up in the First 90 Days
        </h2>
        <div className="space-y-0">
          {planPhases.map((phase, i) => (
            <PlanPhaseBlock
              key={phase.id}
              phase={phase.phase}
              title={phase.title}
              description={phase.description}
              index={i + 1}
            />
          ))}
        </div>
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
        <CaseStudyGrid />
      </section>

      <ContactSection
        email="anishajain765@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/anishajain98/"
      />
    </div>
  )
}
