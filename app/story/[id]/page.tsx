import { supabase } from "@/lib/supabase";
import { Story } from "@/types/story";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { data: story, error } = await supabase
    .from("stories")
    .select("*")
    .eq("id", params.id)
    .eq("published", true)
    .single();

  if (error || !story) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Category + Emotion */}
      <div className="mb-4 text-sm text-neutral-400">
        {story.category} · {story.emotion}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold leading-tight mb-6">
        {story.title}
      </h1>

      {/* Author */}
      <div className="text-sm text-neutral-500 mb-10">
        {story.anonymous ? "Anonymous Author" : "Author"}
        {" · "}
        {new Date(story.created_at).toDateString()}
      </div>

      {/* Story Content */}
      <div className="prose prose-invert max-w-none leading-relaxed">
        {story.content.split("\n").map((para: string, idx: number) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </article>
  );
}
