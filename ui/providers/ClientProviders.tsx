"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "@/ui/context/ThemeContext"

export default function ClientProviders({
  children,
}: {
  children: ReactNode
}) {
  return <ThemeProvider>{children}</ThemeProvider>
}
