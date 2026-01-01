import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "database/stories.json")

function readStories() {
  if (!fs.existsSync(filePath)) return []
  return JSON.parse(fs.readFileSync(filePath, "utf-8"))
}

function writeStories(stories: any[]) {
  fs.writeFileSync(filePath, JSON.stringify(stories, null, 2))
}

export async function GET() {
  const stories = readStories()
  return NextResponse.json(stories)
}

export async function POST(req: Request) {
  const body = await req.json()
  const stories = readStories()

  const newStory = {
    id: Date.now().toString(),
    content: body.content,
    category: body.category || "general",
    author: body.author || "Anonymous",
    status: "pending",
    createdAt: new Date().toISOString(),
  }

  stories.unshift(newStory)
  writeStories(stories)

  return NextResponse.json({ success: true })
}
