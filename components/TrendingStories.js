import { stories } from "../data/stories";
import StoryCard from "./StoryCard";

export default function TrendingStories() {
  const trending = [...stories].sort(
    (a, b) => (b.likes + b.views) - (a.likes + a.views)
  );

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">🔥 Trending Stories</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {trending.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
