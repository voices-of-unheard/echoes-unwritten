"use client"

import { useState } from "react"

export default function StoryForm() {
  const [content, setContent] = useState("")
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit() {
    if (!content.trim()) return

    await fetch("/api/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        category: "general",
        author: "Anonymous",
      }),
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p style={{ marginTop: 32 }}>
        Your story has been received.
        <br />
        Thank you for trusting this space.
      </p>
    )
  }

  return (
    <>
      <textarea
        placeholder="Begin here…"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          minHeight: 240,
          background: "transparent",
          color: "inherit",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: 16,
          fontFamily: "inherit",
          fontSize: 16,
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 24,
          padding: "10px 18px",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        Submit Story
      </button>
    </>
  )
}
