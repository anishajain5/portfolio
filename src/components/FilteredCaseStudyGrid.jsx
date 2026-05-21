import { useState } from 'react'
import caseStudies from '../data/caseStudies'
import CaseStudyCard from './CaseStudyCard'

const FILTERS = ['All', 'Product', 'Data and Analytics', 'Healthcare', 'Strategy', 'Independent']

export default function FilteredCaseStudyGrid() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? caseStudies : caseStudies.filter(cs => cs.category === active)

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
    </div>
  )
}
