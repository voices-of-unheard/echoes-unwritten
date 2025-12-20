export function calculateTrendingScore(story: any) {
  const hoursOld =
    (Date.now() - new Date(story.created_at).getTime()) / 36e5;

  return (
    story.likes * 3 +
    story.views * 1.5 -
    hoursOld * 0.2
  );
}
