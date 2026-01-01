"use client"

import { useEffect, useState } from "react"
import AdminStoryRow from "./AdminStoryRow"

export default function AdminStoryList() {
  const [stories, setStories] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/stories")
      .then((res) => res.json())
      .then(setStories)
  }, [])

async function updateStatus(id: string, status: string) {
  await fetch("/api/admin/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  })

  setStories((prev) =>
    prev.map((s) =>
      s.id === id ? { ...s, status } : s
    )
  )
}

  if (!stories.length) {
    return <p>No stories yet.</p>
  }

  return (
    <>
      {stories.map((story) => (
        <AdminStoryRow
          key={story.id}
          story={story}
          onUpdate={updateStatus}
        />
      ))}
    </>
  )
}
