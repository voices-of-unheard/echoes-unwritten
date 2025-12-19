import TrendingStories from "../components/TrendingStories";
import LatestStories from "../components/LatestStories";
import Categories from "../components/Categories";
import RandomStory from "../components/RandomStory";

export default function Home() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <TrendingStories />
      <LatestStories />
      <Categories />
      <RandomStory />
    </main>
  );
}
