import fs from "fs"
import path from "path"
import { Story } from "./types"

const dataFile = path.join(process.cwd(), "database", "stories.json")

function ensureFileExists() {
  if (!fs.existsSync(dataFile)) {
    fs.mkdirSync(path.dirname(dataFile), { recursive: true })
    fs.writeFileSync(dataFile, JSON.stringify([], null, 2))
  }
}

export function getAllStories(): Story[] {
  ensureFileExists()
  const raw = fs.readFileSync(dataFile, "utf-8")
  return JSON.parse(raw)
}

export function saveStory(story: Story) {
  const stories = getAllStories()
  stories.unshift(story)
  fs.writeFileSync(dataFile, JSON.stringify(stories, null, 2))
}

export function saveStoryBatch(stories: Story[]) {
  fs.writeFileSync(dataFile, JSON.stringify(stories, null, 2))
}
