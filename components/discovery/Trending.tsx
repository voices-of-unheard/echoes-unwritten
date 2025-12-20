"use client";

import { useEffect, useState } from "react";
import StoryCard from "@/components/story/StoryCard";
import { Story } from "@/types/story";

export default function Trending() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetch("/api/trending");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStories(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchTrending();
  }, []);

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🔥 Trending</h2>
        <p className="text-neutral-500">Loading stories...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🔥 Trending</h2>
        <p className="text-red-400">Unable to load trending stories.</p>
      </section>
    );
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">🔥 Trending Stories</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
