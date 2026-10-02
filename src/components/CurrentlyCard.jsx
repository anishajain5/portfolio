const ROWS = [
  { icon: '📺', label: 'watching', value: 'Mom + Modern Family' },
  { icon: '📖', label: 'reading', value: 'Harry Potter & the Half-Blood Prince · Things That Matter' },
  { icon: '☕', label: 'drinking', value: 'ice lattes' },
  { icon: '💼', label: 'working', value: 'Technical Project Manager at IAM Enterprise Company' },
  { icon: '🛠️', label: 'building', value: 'Ribbon: App for Couples', href: 'https://theribbonapp.com' },
]

export default function CurrentlyCard() {
  return (
    <div
      className="w-full max-w-sm bg-surface border border-border rounded-lg p-6 shadow-sm"
      style={{ fontFamily: 'var(--font-sans)' }}
    >
      <div className="flex items-center gap-4 mb-5 pb-5 border-b border-border">
        <div className="w-14 h-14 rounded-full bg-primary-50 border border-border flex items-center justify-center text-2xl shrink-0">
          🌸
        </div>
        <div>
          <p className="font-bold text-ink text-base leading-tight">anisha jain</p>
          <p className="text-xs text-primary-600 tracking-widest mt-1">// currently</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {ROWS.map(({ icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-3 text-sm leading-relaxed">
            <span className="shrink-0">{icon}</span>
            <p>
              <span className="text-primary-600">{label}:</span>{' '}
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  {value}
                </a>
              ) : (
                <span className="text-ink-muted">{value}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
