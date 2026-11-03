import { useMemo } from 'react'

const FLOWER_COLORS = ['#f3b8c8', '#c9b6e4', '#f6e08a', '#ffffff', '#f4c39a', '#a9c8ee', '#bfe0a8']

// Deterministic pseudo random numbers so the flowers do not move between renders
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

function buildFlowers(count) {
  const rand = seededRandom(7)
  return Array.from({ length: count }, () => {
    const x = rand() * 1440
    const meadowTop = 660 + (x / 1440) * 110
    const y = meadowTop + 12 + rand() * (890 - meadowTop - 12)
    return {
      x,
      y,
      r: 2 + rand() * 5 * ((y - 640) / 260),
      color: FLOWER_COLORS[Math.floor(rand() * FLOWER_COLORS.length)],
      opacity: 0.45 + rand() * 0.4,
    }
  })
}

// Soft impressionist landscape: misty pale mountains and a pastel flower meadow.
export default function GhibliBackground() {
  const flowers = useMemo(() => buildFlowers(170), [])

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ background: 'linear-gradient(to bottom, #fbf8f0 0%, #eef4f8 45%, #f3f7ee 100%)' }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <filter id="brush" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" seed="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="2.2" />
          </filter>
          <filter id="grain" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="9" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.5  0 0 0 0 0.45  0 0 0 0.5 0" />
          </filter>
          <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fbf8f0" stopOpacity="0.85" />
            <stop offset="1" stopColor="#fbf8f0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="meadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#eef0c6" />
            <stop offset="1" stopColor="#e3ecbd" />
          </linearGradient>
        </defs>

        <g filter="url(#brush)">
          {/* Far mountains */}
          <path d="M0 400 L130 330 L260 380 L420 270 L560 330 L690 200 L820 290 L980 250 L1150 330 L1300 290 L1440 340 L1440 640 L0 640 Z" fill="#dbe8f3" />
          {/* Mid mountains */}
          <path d="M0 470 L180 380 L330 450 L520 350 L700 430 L900 330 L1080 420 L1250 360 L1440 430 L1440 680 L0 680 Z" fill="#c9dded" />
          <path d="M640 430 L900 330 L1080 420 L1000 520 L800 560 Z" fill="#d8e9d4" opacity="0.55" />
          {/* Near slopes with warm sunlit edges */}
          <path d="M0 560 L220 480 L440 560 L640 520 L880 600 L1120 480 L1300 540 L1440 470 L1440 740 L0 740 Z" fill="#b9d3e7" />
          <path d="M880 600 L1120 480 L1300 540 L1440 470 L1440 560 L1300 610 L1120 570 Z" fill="#dfe9bd" opacity="0.7" />
        </g>

        {/* Mist between mountains and meadow */}
        <rect x="0" y="480" width="1440" height="220" fill="url(#mist)" />

        {/* Meadow */}
        <g filter="url(#brush)">
          <path d="M0 660 C 320 620, 640 700, 980 745 C 1180 772, 1330 770, 1440 770 L1440 900 L0 900 Z" fill="url(#meadow)" />
          <path d="M0 720 C 300 690, 700 770, 1000 800 C 1200 820, 1340 815, 1440 815 L1440 900 L0 900 Z" fill="#dce8b0" opacity="0.75" />
        </g>

        {/* Pastel wildflowers */}
        <g>
          {flowers.map((f, i) => (
            <circle key={i} cx={f.x} cy={f.y} r={f.r} fill={f.color} opacity={f.opacity} />
          ))}
        </g>

        {/* Painted canvas grain */}
        <rect x="0" y="0" width="1440" height="900" filter="url(#grain)" opacity="0.18" />
      </svg>
    </div>
  )
}
