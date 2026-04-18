import { useState, useEffect } from 'react'
import { fetchCaseStudies } from '../lib/supabase'
import CaseStudyCard from './CaseStudyCard'

function SkeletonCard() {
  return (
    <div className="border border-gray-100 rounded-lg p-6 animate-pulse">
      <div className="h-3 bg-gray-100 rounded w-20 mb-3" />
      <div className="h-3 bg-gray-100 rounded w-32 mb-5" />
      <div className="space-y-2">
        <div className="h-3 bg-gray-100 rounded w-full" />
        <div className="h-3 bg-gray-100 rounded w-5/6" />
        <div className="h-3 bg-gray-100 rounded w-4/6" />
      </div>
    </div>
  )
}

export default function CaseStudyGrid({ ctaTo, ctaLabel }) {
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCaseStudies()
      .then(data => setCaseStudies(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return (
      <p className="text-sm text-gray-400">[Could not load case studies]</p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {loading
        ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
        : caseStudies.map(cs => (
            <CaseStudyCard
              key={cs.id}
              company={cs.company}
              role={cs.role}
              summary={cs.summary}
              ctaTo={ctaTo}
              ctaLabel={ctaLabel}
            />
          ))
      }
    </div>
  )
}
