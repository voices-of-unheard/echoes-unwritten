const categories = [
  "Mental Health",
  "Life",
  "Relationships",
  "Injustice",
  "Hope",
  "Confessions"
];

export default function Categories() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">🧭 Discover by Emotion</h2>

      <div className="flex flex-wrap gap-3">
        {categories.map(cat => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full bg-[#222] hover:bg-white hover:text-black transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
