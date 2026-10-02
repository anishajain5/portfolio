import FilteredWorkSampleGrid from '../components/FilteredWorkSampleGrid'

export default function AllWorkSamples() {
  return (
    <div className="py-12">
      <p
        className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Work
      </p>
      <h1
        className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink mb-10"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        All Work Samples
      </h1>
      <FilteredWorkSampleGrid />
    </div>
  )
}
