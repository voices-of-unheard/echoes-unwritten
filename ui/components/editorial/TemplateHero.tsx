export default function TemplateHero() {
  return (
    <section
      className="relative flex"
      style={{
        minHeight: "85vh",     // NOT 100vh
        backgroundColor: "#0b0b0b",
      }}
    >
      {/* TEXT SIDE */}
      <div className="relative z-10 w-1/2 px-20 py-32 text-[#eae6df]">
        <p className="text-xs tracking-widest opacity-60">
          ECHOES UNWRITTEN
        </p>

        <h1 className="mt-6 text-5xl font-serif leading-tight">
          Echoes<br />Unwritten
        </h1>

        <p className="mt-8 max-w-md opacity-80 leading-relaxed">
          A quiet archive of voices the world never stopped to hear.
        </p>

        <p className="mt-24 text-xs opacity-40 tracking-widest">
          SCROLL TO ENTER
        </p>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/editorial-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  )
}
