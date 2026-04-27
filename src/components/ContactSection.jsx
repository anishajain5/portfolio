import ContactForm from './ContactForm'

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

      <ContactForm />

      <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-100">
        <a
          href={`mailto:${email}`}
          className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
        >
          {email}
        </a>
        <span className="text-gray-200">|</span>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
