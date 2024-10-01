import { defineCollection, s } from 'velite'

const icon = s.enum(['github', 'instagram', 'medium', 'twitter', 'youtube'])

export const options = defineCollection({
  name: 'Options',
  pattern: 'data/options.yml',
  single: true,
  schema: s.object({
    name: s.string().max(20),
    title: s.string().max(99),
    description: s.string().max(999).optional(),
    keywords: s.array(s.string()),
    author: s.object({ name: s.string(), email: s.string().email(), url: s.string().url() }),
    links: s.array(
      s.object({
        text: s.string(),
        link: s.string(),
        type: s.enum(['navigation', 'footer', 'copyright']),
      }),
    ),
    socials: s.array(
      s.object({
        name: s.string(),
        icon,
        link: s.string().optional(),
        image: s.image().optional(),
      }),
    ),
  }),
})
