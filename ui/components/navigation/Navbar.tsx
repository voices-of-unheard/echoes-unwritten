"use client"

import { useTheme } from "../../context/ThemeContext"

export default function Navbar() {
  const { setTheme } = useTheme()

  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <span className="vintage-title text-lg">
        Echoes Unwritten
      </span>

      <div className="flex gap-4 text-sm">
        <button onClick={() => setTheme("theme-parchment")}>
          Parchment
        </button>
        <button onClick={() => setTheme("theme-ink")}>
          Ink
        </button>
        <button onClick={() => setTheme("theme-faded")}>
          Faded
        </button>
      </div>
    </nav>
  )
}
