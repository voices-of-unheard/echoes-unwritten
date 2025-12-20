"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  storyId: string;
}

export default function StoryViewTracker({ storyId }: Props) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (!triggerRef.current || counted) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !counted) {
          try {
            await fetch(`/api/stories/${storyId}/view`, {
              method: "POST",
            });
            setCounted(true);
          } catch (err) {
            console.error("View tracking failed");
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, [storyId, counted]);

  return (
    <div
      ref={triggerRef}
      aria-hidden
      className="h-1"
    />
  );
}
