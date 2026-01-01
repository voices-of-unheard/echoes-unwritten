import Link from "next/link"

export default function NavigationLinks({
  onNavigate,
}: {
  onNavigate: () => void
}) {
  return (
    <nav className="flex flex-col gap-14 text-base">

      {/* HOME */}
      <div className="flex flex-col gap-4">
        <Link
          href="/home"
          onClick={onNavigate}
          className="text-white text-lg hover:opacity-70 transition"
        >
          Home
        </Link>
      </div>

      {/* READ STORIES */}
      <div className="flex flex-col gap-4">
        <p className="text-xs tracking-widest text-[#b8b2a7]">
          READ STORIES
        </p>

        <Link href="/catalog/confessions" onClick={onNavigate} className="text-white hover:opacity-70">
          Confessions
        </Link>
        <Link href="/catalog/letters" onClick={onNavigate} className="text-white hover:opacity-70">
          Letters Never Sent
        </Link>
        <Link href="/catalog/memoirs" onClick={onNavigate} className="text-white hover:opacity-70">
          Memoirs
        </Link>
        <Link href="/catalog/anonymous" onClick={onNavigate} className="text-white hover:opacity-70">
          Anonymous Voices
        </Link>
      </div>

      {/* SHARE */}
      <div className="flex flex-col gap-4">
        <p className="text-xs tracking-widest text-[#b8b2a7]">
          SHARE
        </p>

        <Link
          href="/submit"
          onClick={onNavigate}
          className="text-white hover:opacity-70"
        >
          Share Your Story
        </Link>

        <span className="text-white/40 cursor-not-allowed">
          Privacy & Anonymity
        </span>
      </div>

      {/* ABOUT */}
      <div className="flex flex-col gap-4">
        <p className="text-xs tracking-widest text-[#b8b2a7]">
          ABOUT
        </p>

        <Link href="/about" onClick={onNavigate} className="text-white hover:opacity-70">
          About
        </Link>

        <span className="text-white/40 cursor-not-allowed">
          Our Philosophy
        </span>

        <Link href="/careers" onClick={onNavigate} className="text-white hover:opacity-70">
          Careers
        </Link>

        <Link href="/contact" onClick={onNavigate} className="text-white hover:opacity-70">
          Contact
        </Link>
      </div>
    </nav>
  )
}
