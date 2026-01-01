"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Story = {
  id: string
  title: string
  content: string
  author: string
}

export default function FeaturedStory() {
  const [story, setStory] = useState<Story | null>(null)

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setStory(data[0]) // latest approved
        }
      })
  }, [])

  if (!story) return null

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 border-t border-black/10">
      <p className="vintage-tagline text-sm mb-4 opacity-70">
        Featured Story
      </p>

      <h2 className="vintage-title text-4xl mb-6">
        {story.title}
      </h2>

      <p className="text-lg leading-relaxed max-w-3xl opacity-85 mb-8">
        {story.content.slice(0, 260)}…
      </p>

      <Link
        href={`/story/${story.id}`}
        className="underline vintage-text"
      >
        Continue reading →
      </Link>
    </section>
  )
}
