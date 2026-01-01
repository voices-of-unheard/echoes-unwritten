"use client"

import { useEffect, useState } from "react"
import StoryRow from "@/ui/components/catalog/StoryRow"

interface Story {
  id: string
  title?: string
  content: string
  category?: string
  author: string
  createdAt: string
  status?: string
}

export default function StoryList({ type }: { type?: string }) {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStories() {
      const res = await fetch("/api/stories")
      const allStories: Story[] = await res.json()

      // 🛡️ Defensive guard (THIS FIXES YOUR ERROR)
      if (!type) {
        setStories([])
        setLoading(false)
        return
      }

      const normalizedType = String(type).toLowerCase().trim()

      const filtered = allStories.filter(
        (story) =>
          story.status === "approved" &&
          story.category?.toLowerCase().trim() === normalizedType
      )

      setStories(filtered)
      setLoading(false)
    }

    loadStories()
  }, [type])

  if (loading) {
    return <p className="editorial-muted">Loading stories…</p>
  }

  if (!type) {
    return (
      <p className="editorial-muted">
        Invalid story category.
      </p>
    )
  }

  if (stories.length === 0) {
    return (
      <p className="editorial-muted">
        No stories yet in this category.
      </p>
    )
  }

  return (
    <section className="space-y-16">
      {stories.map((story) => (
        <StoryRow
          key={story.id}
          story={{
            id: story.id,
            title: story.title || "Untitled",
            excerpt: story.content.slice(0, 120) + "…",
            author: story.author,
          }}
        />
      ))}
    </section>
  )
}
