export default function ContactSection({ email, linkedinUrl }) {
  return (
    <section className="border-t border-gray-200 pt-12 mt-12">
      <p
        className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-4"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Contact
      </p>
      <h2
        className="text-3xl font-bold text-ink mb-3 leading-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        [Contact heading placeholder]
      </h2>
      <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
        [Contact subtext placeholder -- one sentence about the best way to reach you.]
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${email}`}
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded transition-colors text-sm"
        >
          Email me
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 hover:border-primary-600 hover:text-primary-600 text-gray-700 font-medium px-6 py-3 rounded transition-colors text-sm"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
