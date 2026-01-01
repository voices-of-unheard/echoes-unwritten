import identity from "@database/identity/identity.json"

export default function BrandHeader() {
  return (
    <section className="text-center py-24">
      <h1 className="vintage-title vintage-text text-5xl mb-6">
        {identity.name}
      </h1>
      <p className="vintage-tagline vintage-text text-xl">
        {identity.taglines[0]}
      </p>
    </section>
  )
}
