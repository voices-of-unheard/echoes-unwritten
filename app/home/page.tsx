import TemplateHero from "@/ui/components/editorial/TemplateHero"
import FeaturedStory from "@/ui/components/editorial/FeaturedStory"
import StorySpread from "@/ui/components/editorial/StorySpread"

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <TemplateHero />

      {/* SPACER TO ALLOW SCROLL */}
      <section style={{ height: "40vh" }} />

      {/* FEATURED STORY */}
      <FeaturedStory />

      {/* STORY LIST */}
      <StorySpread />
    </main>
  )
}
