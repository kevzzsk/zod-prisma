import * as z from "zod"

export const DocumentModel = z.object({
  id: z.string(),
  filename: z.string(),
  author: z.string(),
  contents: z.string(),
  created: z.date(),
  updated: z.date(),
})

export type DocumentModel = z.infer<typeof DocumentModel>
