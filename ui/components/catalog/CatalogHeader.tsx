const titles: Record<string, string> = {
  confessions: "Confessions",
  letters: "Letters Never Sent",
  memoirs: "Memoirs",
  anonymous: "Anonymous Voices",
}

const descriptions: Record<string, string> = {
  confessions:
    "Stories people were never ready to say out loud.",
  letters:
    "Words written but never sent.",
  memoirs:
    "Fragments of lived experience, remembered.",
  anonymous:
    "Voices shared without names, but not without weight.",
}

export default function CatalogHeader({ type }: { type: string }) {
  return (
    <header className="mb-24 max-w-3xl">
      <p className="text-xs tracking-widest text-[#b8b2a7] mb-6">
        STORY CATALOG
      </p>

      <h1 className="editorial-title mb-8">
        {titles[type] || "Stories"}
      </h1>

      <p className="editorial-body editorial-muted">
        {descriptions[type] ||
          "A curated collection of human stories."}
      </p>
    </header>
  )
}
