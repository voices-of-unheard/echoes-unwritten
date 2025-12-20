import { supabase } from "@/lib/supabase";
import { calculateTrendingScore } from "@/lib/trending";

export async function GET() {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .eq("published", true);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  const sorted = data
    .map(story => ({
      ...story,
      score: calculateTrendingScore(story),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return Response.json(sorted);
}
