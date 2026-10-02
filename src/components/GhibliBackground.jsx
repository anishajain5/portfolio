const CLOUDS = [
  { top: '9%', left: '6%', width: 'min(34vw, 420px)', opacity: 0.95, duration: '26s', delay: '0s' },
  { top: '20%', left: '58%', width: 'min(40vw, 520px)', opacity: 0.9, duration: '32s', delay: '-8s' },
  { top: '38%', left: '28%', width: 'min(26vw, 320px)', opacity: 0.75, duration: '30s', delay: '-14s' },
  { top: '4%', left: '78%', width: 'min(24vw, 300px)', opacity: 0.8, duration: '28s', delay: '-3s' },
]

function Cloud() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-auto" aria-hidden="true">
      <g fill="#ffffff">
        <ellipse cx="200" cy="120" rx="190" ry="34" />
        <circle cx="105" cy="95" r="52" />
        <circle cx="175" cy="68" r="62" />
        <circle cx="255" cy="82" r="50" />
        <circle cx="315" cy="105" r="38" />
      </g>
      <ellipse cx="200" cy="138" rx="170" ry="14" fill="#dcecf5" opacity="0.7" />
    </svg>
  )
}

// Soft Ghibli-style sky, drifting clouds and rolling hills. Clouds pause when `paused` is true.
export default function GhibliBackground({ paused }) {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ background: 'linear-gradient(to bottom, #a9d8ef 0%, #cdeaf5 38%, #eef8f3 70%, #f6fbef 100%)' }}
    >
      {CLOUDS.map((cloud, i) => (
        <div
          key={i}
          className="absolute animate-cloud"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.width,
            opacity: cloud.opacity,
            animationDuration: cloud.duration,
            animationDelay: cloud.delay,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          <Cloud />
        </div>
      ))}

      <svg
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '34vh' }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path d="M0 210 C 220 120, 420 150, 640 210 C 860 270, 1100 130, 1440 190 L1440 400 L0 400 Z" fill="#c9e6b4" opacity="0.7" />
        <path d="M0 270 C 260 190, 520 250, 760 290 C 1000 330, 1200 220, 1440 270 L1440 400 L0 400 Z" fill="#aad49a" opacity="0.75" />
        <path d="M0 340 C 300 290, 600 360, 900 335 C 1150 312, 1300 340, 1440 325 L1440 400 L0 400 Z" fill="#8fc283" opacity="0.8" />
      </svg>
    </div>
  )
}
