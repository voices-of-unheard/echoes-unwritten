import Link from "next/link";
import { Story } from "@/types/story";

export default function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/story/${story.id}`}>
      <div className="rounded-xl border border-neutral-800 p-4 hover:bg-neutral-900 transition">
        <h3 className="text-lg font-semibold">
          {story.title}
        </h3>

        <p className="text-sm text-neutral-400 mt-2 line-clamp-2">
          {story.preview}
        </p>

        <div className="flex justify-between text-xs text-neutral-500 mt-4">
          <span>{story.category} · {story.emotion}</span>
          <span>{story.anonymous ? "Anonymous" : "Author"}</span>
        </div>
      </div>
    </Link>
  );
}
