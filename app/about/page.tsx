export default function AboutPage() {
  return (
    <main className="editorial-dark px-8 md:px-24 py-32 min-h-screen">
      
      <header className="mb-20 max-w-4xl">
        <p className="text-xs tracking-widest text-[#b8b2a7] mb-6">
          ABOUT
        </p>

        <h1 className="editorial-title mb-10">
          Echoes Unwritten
        </h1>

        <p className="editorial-body editorial-muted">
          Echoes Unwritten is a digital archive created to preserve voices that
          often go unheard. It is a space where stories can exist without
          performance, without pressure, and without fear.
        </p>
      </header>

      <section className="max-w-3xl space-y-10">
        <p className="editorial-body editorial-muted">
          We believe that not every story needs an audience — but every story
          deserves a place.
        </p>

        <p className="editorial-body editorial-muted">
          Some stories are shared with names. Others are shared anonymously.
          Both are treated with equal respect.
        </p>

        <p className="editorial-body editorial-muted">
          This platform is not built for virality, metrics, or trends. It is
          built as an archive — quiet, intentional, and enduring.
        </p>
      </section>

    </main>
  )
}
