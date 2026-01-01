"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Theme = "theme-parchment" | "theme-ink" | "theme-faded"

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("theme-parchment")

  return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    <div
      className={theme}
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {children}
    </div>
  </ThemeContext.Provider>
)
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used inside ThemeProvider")
  return context
}
