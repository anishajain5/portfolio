const blogPosts = [
  {
    id: 1,
    title: 'RAG vs Fine-tuning: When to Use Which',
    slug: 'rag-vs-fine-tuning',
    date: '2026-07-14',
    readTime: '6 min read',
    category: 'AI',
    excerpt: "A practical breakdown of when retrieval beats retraining and when it doesn't.",
    content: `Most teams reach for fine-tuning when what they actually need is retrieval, and vice versa. The two solve different problems, and confusing them costs weeks of wasted effort.

Fine-tuning changes how a model behaves: its tone, its format, its reasoning style. It is the right tool when you need consistent structure across every response, or when you are teaching the model a skill it does not already have.

Retrieval-augmented generation changes what a model knows. It is the right tool when your knowledge base changes often, when you need citations back to source material, or when the cost of retraining on every update would be prohibitive.

The practical test I use: if the failure mode is "the model does not know this fact," reach for RAG. If the failure mode is "the model knows the fact but expresses it wrong," reach for fine-tuning.

Most production systems end up needing both. RAG handles the knowledge layer, and a lighter fine-tune (or even just careful prompting) handles the voice and format layer on top of it.

The mistake to avoid is treating fine-tuning as a knowledge injection tool. It technically works, but it is slow to update, expensive to iterate on, and prone to hallucinating confidently on anything outside the training distribution. Retrieval fails more gracefully: worst case, it retrieves nothing relevant and the model can say so.`,
  },
  {
    id: 2,
    title: 'What Building Ours Taught Me About Product Decisions',
    slug: 'building-ours-product-decisions',
    date: '2026-08-02',
    readTime: '5 min read',
    category: 'Product',
    excerpt: 'Lessons from shipping a live app in two weeks using Claude Code.',
    content: `I built and shipped Ours, a place for couples, in two weeks using Claude Code. The constraint was not technical skill. It was decision speed.

When you are moving that fast, every feature request is really a prioritization test in disguise. The instinct is to say yes to everything because it all feels achievable. The discipline is realizing that "achievable" and "worth building right now" are different questions.

The biggest lesson: scope the emotional core first, not the feature list. Ours works because the first thing a couple sees when they open it does one thing well. Everything else is in service of that one thing, not competing with it for attention.

The second lesson: shipping fast does not mean shipping thin. Speed came from cutting decisions, not cutting quality. I made calls quickly and moved on, rather than building three versions of the same screen to compare later.

The third lesson, and the one that surprised me most: using an AI pair programmer changes the bottleneck. Code was never the slow part. Deciding what to build, in what order, and for whom was the slow part. Claude Code compressed the execution time, which meant the product-thinking time had to compress too, or it became the new bottleneck by default.

That is the real takeaway. AI tooling does not remove the need for product judgment. It raises the cost of not having it, because everything downstream of a decision now happens faster.`,
  },
]

export default blogPosts

export function findBlogPost(slug) {
  return blogPosts.find(post => post.slug === slug) ?? null
}
