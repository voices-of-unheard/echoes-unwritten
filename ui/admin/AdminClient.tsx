"use client"

import { useEffect, useState } from "react"

type Story = {
  id: string
  title: string
  content: string
  author: string
  status: string
}

export default function AdminClient() {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/pending")
      .then((res) => res.json())
      .then((data) => {
        setStories(data)
        setLoading(false)
      })
      .catch(() => {
        setStories([])
        setLoading(false)
      })
  }, [])

  async function approveStory(id: string) {
    await fetch("/api/admin/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    setStories((prev) => prev.filter((s) => s.id !== id))
  }

  async function rejectStory(id: string) {
    await fetch("/api/admin/reject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    setStories((prev) => prev.filter((s) => s.id !== id))
  }

  if (loading) {
    return (
      <main className="text-center py-24">
        Loading pending stories…
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="vintage-title text-4xl mb-10">
        Admin – Pending Stories
      </h1>

      {stories.length === 0 ? (
        <p>No pending stories 🎉</p>
      ) : (
        <div className="space-y-10">
          {stories.map((story) => (
            <div
              key={story.id}
              className="border border-black p-6"
            >
              <h2 className="vintage-title text-xl mb-2">
                {story.title}
              </h2>

              <p className="opacity-80 mb-4">
                {story.content}
              </p>

              <p className="vintage-tagline mb-6">
                — {story.author}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => approveStory(story.id)}
                  className="border border-black px-4 py-1 hover:bg-black hover:text-white"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectStory(story.id)}
                  className="border border-black px-4 py-1 hover:bg-red-600 hover:text-white"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
