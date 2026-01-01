import CatalogHeader from "@/ui/components/catalog/CatalogHeader"
import StoryList from "@/ui/components/catalog/StoryList"

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params

  return (
    <main className="editorial-dark px-8 md:px-24 py-32 min-h-screen">
      <CatalogHeader type={type} />
      <StoryList type={type} />
    </main>
  )
}
