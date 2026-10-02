import workSamples from '../data/workSamples'
import WorkSampleCard from './WorkSampleCard'

export default function WorkSampleGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {workSamples.map(ws => (
        <WorkSampleCard
          key={ws.id}
          id={ws.id}
          company={ws.cardTitle ?? ws.company}
          role={ws.cardRole ?? ws.role}
          summary={ws.summary}
            bullets={ws.bullets}
          liveUrl={ws.liveUrl}
          githubUrl={ws.githubUrl}
          status={ws.status}
        />
      ))}
    </div>
  )
}
