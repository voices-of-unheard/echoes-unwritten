"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import RevealOnScroll from "../../animation/RevealOnScroll"

type Story = {
  id: string
  title: string
  content: string
  author: string
}

export default function StorySpread() {
  const [story, setStory] = useState<Story | null>(null)

  useEffect(() => {
    fetch("/api/stories")
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) setStory(data[0])
      })
  }, [])

  if (!story) return null

  return (
    <RevealOnScroll>
      <section className="editorial-dark px-8 md:px-24 py-32 flex flex-col md:flex-row gap-20">
        
        {/* IMAGE */}
        <div
          className="md:w-1/2 h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/editorial-story.jpg')" }}
        />

        {/* TEXT */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="editorial-label editorial-muted mb-6">
            Featured Narrative
          </p>

          <h2 className="editorial-title mb-8">
            {story.title}
          </h2>

          <p className="editorial-body editorial-muted mb-10 max-w-lg">
            {story.content.slice(0, 320)}…
          </p>

          <Link
            href={`/story/${story.id}`}
            className="editorial-label underline"
          >
            Read the full story
          </Link>
        </div>
      </section>
    </RevealOnScroll>
  )
}
