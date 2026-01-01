"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

type Story = {
  id: string
  title: string
  author: string
}

export default function StorySlider() {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then((data) => setStories(data.slice(0, 4)))
  }, [])

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h3 className="vintage-title text-2xl mb-10">
        Curated Voices
      </h3>

      <div className="space-y-12">
        {stories.map((story) => (
          <Link
            key={story.id}
            href={`/story/${story.id}`}
            className="block group"
          >
            <h4 className="vintage-title text-xl mb-2 group-hover:underline">
              {story.title}
            </h4>
            <p className="vintage-tagline text-sm opacity-70">
              — {story.author}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
