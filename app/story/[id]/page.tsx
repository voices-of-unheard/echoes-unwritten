import StoryReader from "@/ui/components/story/StoryReader"
import StoryMeta from "@/ui/components/story/StoryMeta"
import StoryFooter from "@/ui/components/story/StoryFooter"

async function getStory(id: string) {
  const res = await fetch("http://localhost:3000/api/stories", {
    cache: "no-store",
  })
  const stories = await res.json()
  return stories.find((s: any) => s.id === id)
}

export default async function StoryPage({
  params,
}: {
  params: { id: string }
}) {
  const story = await getStory(params.id)

  if (!story || story.status !== "approved") {
    return (
      <p style={{ padding: "120px", textAlign: "center" }}>
        This story could not be found.
      </p>
    )
  }

  return (
    <>
      <StoryMeta story={story} />
      <StoryReader story={story} />
      <StoryFooter />
    </>
  )
}
