import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "database/stories.json")

export async function POST(req: Request) {
  const { id, status } = await req.json()
  const stories = JSON.parse(fs.readFileSync(filePath, "utf-8"))

  const updated = stories.map((s: any) =>
    s.id === id ? { ...s, status } : s
  )

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2))

  return NextResponse.json({ success: true })
}
