"use client"

import { useState } from "react"
import BookMenuButton from "./BookMenuButton"
import NavigationLinks from "./NavigationLink"

export default function NavigationDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BookMenuButton onClick={() => setOpen(true)} />

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        >
          <aside
            className="
              absolute right-0 top-0 h-full w-[400px]
              bg-[#141414]
              border-l border-white/10
              px-12 py-14
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Brand */}
            <div className="mb-20">
              <h2 className="text-xl font-serif tracking-wide text-white">
                Echoes Unwritten
              </h2>
              <p className="text-xs tracking-widest text-[#b8b2a7] mt-2">
                A QUIET ARCHIVE
              </p>
            </div>

            {/* Navigation */}
            <NavigationLinks onNavigate={() => setOpen(false)} />

            {/* Footer */}
            <div className="absolute bottom-10 left-12 right-12 text-xs text-white/40">
              © {new Date().getFullYear()} Echoes Unwritten
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
