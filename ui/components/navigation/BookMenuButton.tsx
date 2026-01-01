"use client"

import { BookOpen } from "lucide-react"

export default function BookMenuButton({
  onClick,
}: {
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Open navigation"
      className="
        fixed top-6 right-6 z-50
        text-[#f5f1eb]
        opacity-80 hover:opacity-100
        transition
      "
    >
      <BookOpen size={26} strokeWidth={1.2} />
    </button>
  )
}
