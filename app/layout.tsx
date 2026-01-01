import type { Metadata } from "next"
import "./globals.css"
import NavigationDrawer from "../ui/components/navigation/NavigationDrawer"

export const metadata: Metadata = {
  title: "Echoes Unwritten",
  description: "A quiet archive of voices the world never stopped to hear.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationDrawer />
        <main className="page-container">{children}</main>
      </body>
    </html>
  )
}
