import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataFilePath = path.join(
  process.cwd(),
  "database",
  "stories",
  "stories.json"
)

export async function GET() {
  try {
    const fileData = fs.readFileSync(dataFilePath, "utf-8")
    const stories = JSON.parse(fileData || "[]")

    const pendingStories = stories.filter(
      (story: any) => story.status === "pending"
    )

    return NextResponse.json(pendingStories)
  } catch {
    return NextResponse.json([])
  }
}
