import { useState, useEffect } from 'react'
import { fetchPlanTemplate } from '../lib/supabase'
import PlanPhaseBlock from '../components/PlanPhaseBlock'
import CaseStudyGrid from '../components/CaseStudyGrid'
import ContactSection from '../components/ContactSection'

function SkeletonPhase() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pb-10 border-b border-gray-100 animate-pulse">
      <div className="sm:w-36 shrink-0">
        <div className="h-3 bg-gray-100 rounded w-24" />
      </div>
      <div className="flex-1">
        <div className="h-4 bg-gray-100 rounded w-48 mb-3" />
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded w-full" />
          <div className="h-3 bg-gray-100 rounded w-5/6" />
          <div className="h-3 bg-gray-100 rounded w-4/6" />
        </div>
      </div>
    </div>
  )
}

export default function ForHiringManager() {
  const [plan, setPlan] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPlanTemplate()
      .then(data => setPlan(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

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
          className="text-4xl md:text-6xl font-bold leading-none tracking-tight text-ink mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          [Hero heading placeholder]
        </h1>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          [Hero subtext placeholder -- one to two sentences on how you approach new roles.]
        </p>
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
          [Plan section heading placeholder]
        </h2>

        {error && (
          <p className="text-sm text-gray-400">[Could not load plan template]</p>
        )}

        <div className="space-y-0">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonPhase key={i} />)
            : plan.map((phase, i) => (
                <PlanPhaseBlock
                  key={phase.id}
                  phase={phase.phase}
                  title={phase.title}
                  description={phase.description}
                  index={i + 1}
                />
              ))
          }
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
