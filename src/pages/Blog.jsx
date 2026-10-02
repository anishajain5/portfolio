import { useState } from 'react'
import { Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts'

const FILTERS = ['All', 'AI', 'Product']

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function Blog() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogPosts : blogPosts.filter(post => post.category === active)

  return (
    <div className="py-12" style={{ fontFamily: 'var(--font-sans)' }}>
      <p className="text-xs font-medium tracking-widest uppercase text-primary-600 mb-3">
        // writing
      </p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink mb-10">
        AI · Product · Systems
      </h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={[
              'px-4 py-1.5 text-sm font-medium rounded-full border transition-colors',
              active === f
                ? 'bg-primary-600 border-primary-600 text-white'
                : 'border-border text-ink-muted hover:border-primary-600 hover:text-primary-600',
            ].join(' ')}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(post => (
          <div
            key={post.id}
            className="bg-surface border border-border rounded-lg p-6 flex flex-col hover:border-primary-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium tracking-widest uppercase text-primary-600 px-2.5 py-1 rounded-full border border-primary-200 bg-primary-50">
                {post.category}
              </span>
              <span className="text-xs text-ink-muted">{formatDate(post.date)}</span>
              <span className="text-xs text-ink-muted">· {post.readTime}</span>
            </div>
            <h2 className="text-lg font-bold text-ink mb-3 leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors self-start"
            >
              read →
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-ink-muted mt-10">No posts in this category yet.</p>
      )}
    </div>
  )
}
