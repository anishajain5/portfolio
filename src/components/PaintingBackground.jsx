// Full page painted backdrop with a soft white wash so text stays readable.
export default function PaintingBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
