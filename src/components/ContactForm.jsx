import { useState } from 'react'
import { supabase } from '../lib/supabase'

const FALLBACK_EMAIL = 'placeholder@email.com'

const defaultFields = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [fields, setFields] = useState(defaultFields)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: fields.name.trim(),
        email: fields.email.trim(),
        message: fields.message.trim(),
      })

    if (error) {
      setStatus('error')
    } else {
      setFields(defaultFields)
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-primary-200 bg-primary-50 rounded-lg px-6 py-5 max-w-lg">
        <p
          className="text-sm font-medium text-primary-700"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Got it. I will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={fields.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="
            w-full px-4 py-3 text-sm border border-gray-200 rounded
            focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600
            disabled:opacity-50 transition-colors
          "
          style={{ fontFamily: 'var(--font-sans)' }}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="
            w-full px-4 py-3 text-sm border border-gray-200 rounded
            focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600
            disabled:opacity-50 transition-colors
          "
          style={{ fontFamily: 'var(--font-sans)' }}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="
            w-full px-4 py-3 text-sm border border-gray-200 rounded resize-none
            focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600
            disabled:opacity-50 transition-colors
          "
          style={{ fontFamily: 'var(--font-sans)' }}
          placeholder="What would you like to say?"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Try emailing me directly at{' '}
          <a
            href={`mailto:${FALLBACK_EMAIL}`}
            className="underline hover:text-red-600 transition-colors"
          >
            {FALLBACK_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="
          bg-primary-600 hover:bg-primary-700 text-white font-medium
          px-6 py-3 rounded text-sm transition-colors
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
