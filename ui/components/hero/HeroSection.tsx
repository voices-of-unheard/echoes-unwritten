import identity from "@database/identity/identity.json"

export default function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-32 text-center">
      <h1 className="vintage-title text-6xl leading-tight mb-6">
        {identity.name}
      </h1>

      <p className="vintage-tagline text-xl max-w-2xl mx-auto opacity-80">
        {identity.taglines[2] ?? "Stories the world never heard"}
      </p>
    </section>
  )
}
