export default function StoryReader({ story }: { story: any }) {
  return (
    <article
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "140px 24px 120px",
      }}
    >
      <h1
        style={{
          fontSize: 36,
          lineHeight: 1.3,
          marginBottom: 32,
        }}
      >
        {story.title || "Untitled"}
      </h1>

      <div
        style={{
          fontSize: 18,
          lineHeight: 1.8,
          whiteSpace: "pre-wrap",
          opacity: 0.95,
        }}
      >
        {story.content}
      </div>
    </article>
  )
}
