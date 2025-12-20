"use client";

import { useState } from "react";

interface Props {
  storyId: string;
  initialLikes: number;
}

export default function LikeButton({
  storyId,
  initialLikes,
}: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function toggleLike() {
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch(
        `/api/stories/${storyId}/like`,
        { method: "POST" }
      );

      const data = await res.json();

      if (data.liked) {
        setLikes((l) => l + 1);
        setLiked(true);
      } else {
        setLikes((l) => Math.max(l - 1, 0));
        setLiked(false);
      }
    } catch (err) {
      console.error("Like failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggleLike}
      disabled={loading}
      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition
        ${
          liked
            ? "border-red-500 text-red-500"
            : "border-neutral-600 text-neutral-300"
        }
        hover:bg-neutral-900
      `}
    >
      <span className="text-lg">
        {liked ? "❤️" : "🤍"}
      </span>
      <span className="text-sm font-medium">
        {likes}
      </span>
    </button>
  );
}
