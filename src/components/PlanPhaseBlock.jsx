export default function PlanPhaseBlock({ phase, title, description, index }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
      <div className="sm:w-36 shrink-0">
        <span
          className="text-xs font-medium tracking-widest uppercase text-primary-600"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {phase}
        </span>
        <div className="mt-2 text-5xl font-bold text-gray-100 select-none hidden sm:block"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {String(index).padStart(2, '0')}
        </div>
      </div>
      <div className="flex-1 pb-10 border-b border-gray-100 last:border-0 last:pb-0">
        <h3
          className="text-xl font-bold text-ink mb-3 leading-snug"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
