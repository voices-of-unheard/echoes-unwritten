"use client"

export default function AdminStoryRow({
  story,
  onUpdate,
}: {
  story: any
  onUpdate: (id: string, status: string) => void
}) {
  return (
    <div
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        paddingBottom: 16,
        marginBottom: 24,
      }}
    >
      <p style={{ fontSize: 14, opacity: 0.7 }}>
        {story.author} · {story.category} · {story.status}
      </p>

      <p style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
        {story.content.slice(0, 300)}
      </p>

      <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
        <button onClick={() => onUpdate(story.id, "approved")}>
          Approve
        </button>
        <button onClick={() => onUpdate(story.id, "hidden")}>
          Hide
        </button>
      </div>
    </div>
  )
}
