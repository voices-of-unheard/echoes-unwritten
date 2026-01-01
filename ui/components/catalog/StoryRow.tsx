import Link from "next/link"

export default function StoryRow({
  story,
}: {
  story: {
    id: string
    title: string
    excerpt: string
    author: string
  }
}) {
  return (
    <article className="border-b border-white/10 pb-10">
      <h2 className="text-xl font-serif mb-4">
        {story.title}
      </h2>

      <p className="editorial-body editorial-muted mb-6 max-w-2xl">
        {story.excerpt}
      </p>

      <Link
        href={`/story/${story.id}`}
        className="text-sm opacity-60 hover:opacity-100 transition"
      >
        Read →
      </Link>
    </article>
  )
}
