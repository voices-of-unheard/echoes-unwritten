import Link from "next/link"

export default function StoryFooter() {
  return (
    <div
      style={{
        marginTop: 120,
        textAlign: "center",
        opacity: 0.6,
      }}
    >
      <Link href="/home">Return to the archive</Link>
    </div>
  )
}
