import { NextResponse } from "next/server"
import crypto from "crypto"

let stories: any[] = []

export async function GET() {
  return NextResponse.json(stories)
}

export async function POST(req: Request) {
  const body = await req.json()

  const story = {
    id: crypto.randomUUID(),
    title: body.title || "",
    content: body.content,
    category: body.category?.toLowerCase() || "general",
    author: body.author || "Anonymous",
    status: "pending",
    createdAt: new Date().toISOString(),
  }

  stories.unshift(story)

  return NextResponse.json({ success: true })
}
