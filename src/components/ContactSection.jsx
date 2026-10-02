import ContactForm from './ContactForm'

export default function ContactSection({ email, linkedinUrl }) {
  return (
    <section className="border-t border-border pt-12 mt-12">
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
        Let's Talk
      </h2>
      <p className="text-ink-muted mb-8 max-w-md leading-relaxed">
        Email is the best way to reach me, or connect on LinkedIn.
      </p>

      <ContactForm />

      <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-border">
        <a
          href={`mailto:${email}`}
          className="text-sm text-ink-muted hover:text-primary-600 transition-colors"
        >
          {email}
        </a>
        <span className="text-border">|</span>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ink-muted hover:text-primary-600 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
