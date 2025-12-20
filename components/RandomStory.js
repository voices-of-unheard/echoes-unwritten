import { stories } from "../data/stories";
import StoryCard from "./StoryCard";
import { useState } from "react";

export default function RandomStory() {
  const [story, setStory] = useState(null);

  const pickRandom = () => {
    const random = stories[Math.floor(Math.random() * stories.length)];
    setStory(random);
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-4">🎲 Hidden Gem</h2>

      <button
        onClick={pickRandom}
        className="mb-4 px-5 py-2 bg-white text-black rounded"
      >
        Discover a Story
      </button>

      {story && <StoryCard story={story} />}
    </section>
  );
}
