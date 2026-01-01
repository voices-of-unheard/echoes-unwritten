export type StoryCategory =
  | "confessions"
  | "letters"
  | "memoirs"
  | "anonymous"

export type StoryStatus =
  | "pending"
  | "approved"
  | "hidden"

export interface Story {
  id: string
  title?: string
  content: string
  category: StoryCategory
  author: string
  createdAt: string
  status: StoryStatus
}
