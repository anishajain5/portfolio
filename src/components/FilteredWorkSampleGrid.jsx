import { useState } from 'react'
import workSamples from '../data/workSamples'
import WorkSampleCard from './WorkSampleCard'

const FILTERS = ['All', 'Product', 'Data and Analytics', 'Healthcare', 'Strategy', 'Independent']

export default function FilteredWorkSampleGrid() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? workSamples : workSamples.filter(ws => ws.category === active)

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
            company={ws.company}
            role={ws.role}
            summary={ws.summary}
            liveUrl={ws.liveUrl}
            githubUrl={ws.githubUrl}
            status={ws.status}
          />
        ))}
      </div>
    </div>
  )
}
