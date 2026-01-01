export default function ContactPage() {
  return (
    <main className="editorial-dark px-8 md:px-24 py-32 min-h-screen">
      
      {/* Header */}
      <header className="mb-20 max-w-4xl">
        <p className="text-xs tracking-widest text-[#b8b2a7] mb-6">
          CONTACT
        </p>

        <h1 className="editorial-title mb-10">
          Reach Out, Thoughtfully
        </h1>

        <p className="editorial-body editorial-muted">
          Echoes Unwritten is intentionally quiet.
          If you choose to contact us, we ask that it be done with the same care.
        </p>
      </header>

      {/* Body */}
      <section className="max-w-3xl space-y-12">
        <p className="editorial-body editorial-muted">
          We welcome messages related to:
        </p>

        <ul className="list-disc list-inside editorial-body editorial-muted space-y-4">
          <li>Questions about the platform</li>
          <li>Concerns regarding published stories</li>
          <li>Thoughtful collaboration ideas</li>
          <li>Ethical or privacy-related matters</li>
        </ul>

        <p className="editorial-body editorial-muted">
          Please understand that we may not respond immediately.
          Silence does not mean disregard — it often means care.
        </p>

        <div className="pt-6">
          <p className="text-sm tracking-widest text-[#b8b2a7] mb-2">
            EMAIL
          </p>

          <p className="editorial-body">
            <a
              href="mailto:contact@echoesunwritten.com"
              className="underline hover:opacity-80 transition"
            >
              contact@echoesunwritten.com
            </a>
          </p>
        </div>
      </section>

    </main>
  )
}
