"use client"

import { useEffect, useState } from "react"
import AdminStoryRow from "./AdminStoryRow"

export default function AdminStoryList({ status }: { status: string }) {
  const [stories, setStories] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then(setStories)
  }, [])

  async function updateStatus(id: string, newStatus: string) {
    await fetch("/api/admin/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    })

    setStories((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: newStatus } : s
      )
    )
  }

  const filtered = stories.filter((s) => s.status === status)

  if (!filtered.length) {
    return (
      <p style={{ opacity: 0.6 }}>
        No {status} stories.
      </p>
    )
  }

  return (
    <>
      {filtered.map((story) => (
        <AdminStoryRow
          key={story.id}
          story={story}
          onUpdate={updateStatus}
        />
      ))}
    </>
  )
}
