import { supabase } from "@/lib/supabase";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const storyId = params.id;

  // Get IP address (Edge + Node safe)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  // Check if this IP already viewed this story in last 1 hour
  const oneHourAgo = new Date(
    Date.now() - 60 * 60 * 1000
  ).toISOString();

  const { data: existing } = await supabase
    .from("story_views")
    .select("id")
    .eq("story_id", storyId)
    .eq("ip", ip)
    .gte("viewed_at", oneHourAgo)
    .limit(1);

  // If already viewed → do nothing
  if (existing && existing.length > 0) {
    return Response.json({ success: true, counted: false });
  }

  // Record the view
  await supabase.from("story_views").insert({
    story_id: storyId,
    ip,
  });

  // Increment views safely
  await supabase.rpc("increment_story_view", {
    story_id_input: storyId,
  });

  return Response.json({ success: true, counted: true });
}
