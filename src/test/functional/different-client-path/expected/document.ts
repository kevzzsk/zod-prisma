import * as z from "zod"

export const DocumentModel = z.object({
  id: z.string(),
  filename: z.string(),
  author: z.string(),
  contents: z.string(),
  created: z.date(),
  updated: z.date(),
})

export interface DocumentModel extends z.infer<typeof DocumentModel> {
}
