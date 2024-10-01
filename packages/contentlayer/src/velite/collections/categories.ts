import { defineCollection, s } from 'velite'

// same as in tags.ts - velite does not allow export
const count = s.object({ total: s.number(), posts: s.number() }).default({ total: 0, posts: 0 })

export const categories = defineCollection({
  name: 'Category',
  pattern: 'categories/*.yml',
  schema: s
    .object({
      name: s.string().max(20),
      slug: s.slug('global', ['admin', 'login']),
      cover: s.image().optional(),
      description: s.string().max(999).optional(),
      count,
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
})
