export default function StoryCard({ story }) {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-4 hover:scale-105 transition">
      <h3 className="text-lg font-semibold">{story.title}</h3>

      <p className="text-gray-400 text-sm mt-2">
        {story.preview}
      </p>

      <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
        <span>{story.category} • {story.emotion}</span>
        <span>{story.readTime}</span>
      </div>

      <div className="flex justify-between mt-2 text-xs">
        <span>{story.anonymous ? "Anonymous" : "Author"}</span>
        <span>❤️ {story.likes} • 👁️ {story.views}</span>
      </div>
    </div>
  );
}
v
