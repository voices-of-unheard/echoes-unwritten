export default function CinematicHero() {
  return (
    <section className="relative h-screen w-full flex">
      
      {/* LEFT — Editorial Text */}
      <div className="w-full md:w-1/2 flex items-center px-12 md:px-24 bg-[#f4efe9]">
        <div className="max-w-xl">
          <p className="vintage-tagline text-sm mb-6 tracking-wide opacity-70">
            AN ARCHIVE OF HUMAN VOICES
          </p>

          <h1 className="vintage-title text-6xl md:text-7xl leading-tight mb-8">
            Echoes  
            <br />
            Unwritten
          </h1>

          <p className="vintage-text text-lg opacity-80 max-w-md">
            Some stories are too quiet for the world.
            <br />
            Here, they are preserved.
          </p>
        </div>
      </div>

      {/* RIGHT — Cinematic Mood Panel */}
      <div className="hidden md:block w-1/2 relative">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero-dark-academia.jpg')",
          }}
        />

        <div className="absolute bottom-10 left-10 z-20 text-white/70 text-sm">
          Literature · Memory · Silence
        </div>
      </div>
    </section>
  )
}
