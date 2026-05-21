import caseStudies from '../data/caseStudies'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudyGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {caseStudies.map(cs => (
        <CaseStudyCard
          key={cs.id}
          id={cs.id}
          company={cs.company}
          role={cs.role}
          summary={cs.summary}
        />
      ))}
    </div>
  )
}
