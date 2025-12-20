import { stories } from "../data/stories";
import StoryCard from "./StoryCard";

export default function LatestStories() {
  const latest = [...stories].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">🆕 New Launches</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {latest.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
