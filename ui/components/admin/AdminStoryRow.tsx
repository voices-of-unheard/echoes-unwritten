"use client"

export default function AdminStoryRow({
  story,
  onUpdate,
}: {
  story: any
  onUpdate: (id: string, status: string) => void
}) {
  return (
    <article
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        paddingBottom: 24,
        marginBottom: 32,
      }}
    >
      <p style={{ fontSize: 12, opacity: 0.6 }}>
        {story.category} · {story.author} · {story.status}
      </p>

      <p style={{ marginTop: 12, whiteSpace: "pre-wrap" }}>
        {story.content.slice(0, 400)}
      </p>

      <div style={{ marginTop: 16, display: "flex", gap: 16 }}>
        {story.status !== "approved" && (
          <button onClick={() => onUpdate(story.id, "approved")}>
            Approve
          </button>
        )}
        {story.status !== "hidden" && (
          <button onClick={() => onUpdate(story.id, "hidden")}>Hide</button>
        )}
      </div>
    </article>
  )
}
