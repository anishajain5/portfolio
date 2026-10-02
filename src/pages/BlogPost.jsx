import { useParams, useNavigate, Link } from 'react-router-dom'
import { findBlogPost } from '../data/blogPosts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = findBlogPost(slug)

  if (!post) {
    return (
      <div className="py-20 text-center" style={{ fontFamily: 'var(--font-sans)' }}>
        <p className="text-ink-muted mb-4">Post not found.</p>
        <Link to="/blog" className="text-sm text-primary-600 hover:text-primary-700 transition-colors">
          Back to writing
        </Link>
      </div>
    )
  }

  const paragraphs = post.content.split('\n\n').map(p => p.trim()).filter(Boolean)

  return (
    <div className="max-w-2xl py-10" style={{ fontFamily: 'var(--font-sans)' }}>
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
        Back to writing
      </button>

      <div className="mb-10 pb-10 border-b border-border">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium tracking-widest uppercase text-primary-600 px-2.5 py-1 rounded-full border border-primary-200 bg-primary-50">
            {post.category}
          </span>
          <span className="text-xs text-ink-muted">{formatDate(post.date)}</span>
          <span className="text-xs text-ink-muted">· {post.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink">
          {post.title}
        </h1>
      </div>

      <div className="space-y-5">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-ink-muted leading-relaxed text-sm md:text-base">
            {para}
          </p>
        ))}
      </div>

      <div className="pt-10 mt-4">
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">&larr;</span>
          Back to writing
        </button>
      </div>
    </div>
  )
}
