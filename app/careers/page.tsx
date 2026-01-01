export default function CareersPage() {
  return (
    <main className="editorial-dark px-8 md:px-24 py-32 min-h-screen">
      
      {/* Header */}
      <header className="mb-20 max-w-4xl">
        <p className="text-xs tracking-widest text-[#b8b2a7] mb-6">
          CAREERS
        </p>

        <h1 className="editorial-title mb-10">
          Build Something Quietly Meaningful
        </h1>

        <p className="editorial-body editorial-muted">
          Echoes Unwritten is not built for speed, scale, or noise.
          It is built with care — and we look for people who work the same way.
        </p>
      </header>

      {/* Body */}
      <section className="max-w-3xl space-y-12">
        <p className="editorial-body editorial-muted">
          We are interested in writers, designers, engineers, and thinkers
          who believe that technology can be calm, respectful, and human.
        </p>

        <p className="editorial-body editorial-muted">
          We value depth over velocity, clarity over complexity,
          and responsibility over reach.
        </p>

        <p className="editorial-body editorial-muted">
          There are no open roles listed at the moment.
          When we begin inviting collaborators, this page will be updated.
        </p>

        <p className="editorial-body editorial-muted">
          If our values resonate with you, you are already aligned with us.
        </p>
      </section>

    </main>
  )
}
