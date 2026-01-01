export default function StoryMeta({ story }: { story: any }) {
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: 13,
        opacity: 0.5,
        marginBottom: 48,
      }}
    >
      {story.author || "Anonymous"} ·{" "}
      {new Date(story.createdAt).toDateString()}
    </p>
  )
}
