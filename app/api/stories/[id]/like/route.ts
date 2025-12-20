import { supabase } from "@/lib/supabase";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const storyId = params.id;

  // Get IP address
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  // Check if already liked
  const { data: existingLike } = await supabase
    .from("story_likes")
    .select("id")
    .eq("story_id", storyId)
    .eq("ip", ip)
    .single();

  // If already liked → UNLIKE
  if (existingLike) {
    await supabase
      .from("story_likes")
      .delete()
      .eq("story_id", storyId)
      .eq("ip", ip);

    await supabase.rpc("decrement_story_like", {
      story_id_input: storyId,
    });

    return Response.json({
      liked: false,
    });
  }

  // Else → LIKE
  await supabase.from("story_likes").insert({
    story_id: storyId,
    ip,
  });

  await supabase.rpc("increment_story_like", {
    story_id_input: storyId,
  });

  return Response.json({
    liked: true,
  });
}
