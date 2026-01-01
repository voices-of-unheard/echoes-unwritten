"use client"

import { useState } from "react"

export default function AdminLoginPage() {
  const [key, setKey] = useState("")
  const [error, setError] = useState("")

  function handleLogin() {
    if (!key) {
      setError("Enter admin key")
      return
    }

    document.cookie = `admin_key=${key}; path=/`
    window.location.href = "/admin"
  }

  return (
    <main className="editorial-dark px-8 md:px-24 py-32 min-h-screen max-w-md mx-auto">
      <h1 className="editorial-title mb-8">Admin Access</h1>

      <input
        type="password"
        placeholder="Enter admin key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        className="w-full bg-transparent border-b border-white/20 py-2 mb-6"
      />

      {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

      <button
        onClick={handleLogin}
        className="text-sm underline"
      >
        Enter Admin Panel
      </button>
    </main>
  )
}
