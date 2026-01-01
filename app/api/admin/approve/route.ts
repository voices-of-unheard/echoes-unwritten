import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataFilePath = path.join(
  process.cwd(),
  "database",
  "stories",
  "stories.json"
)

export async function POST(req: Request) {
  const { id } = await req.json()

  const fileData = fs.readFileSync(dataFilePath, "utf-8")
  const stories = JSON.parse(fileData)

  const updatedStories = stories.map((story: any) =>
    story.id === id
      ? { ...story, status: "approved" }
      : story
  )

  fs.writeFileSync(
    dataFilePath,
    JSON.stringify(updatedStories, null, 2)
  )

  return NextResponse.json({ success: true })
}
