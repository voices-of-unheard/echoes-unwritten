"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function IntroPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home")
    }, 2600) // 2.6 seconds

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen">
      <div className="text-center animate-fade-in">
        <h1 className="vintage-title text-5xl mb-4">
          Echoes Unwritten
        </h1>
        <p className="vintage-tagline text-lg opacity-80">
          Where unheard voices find a home
        </p>
      </div>
    </main>
  )
}
