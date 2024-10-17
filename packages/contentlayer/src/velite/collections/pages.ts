import { defineCollection, s } from 'velite'
import { timestamp } from '../validators/timestamp'
import { metadataCommon } from './metadata'

const getBaseFields = () => {
  return { slug: '', permalink: '' }
}

const baseSchema = {
  code: s.mdx(), // transform mdx to react
  content: s.markdown(), // transform markdown to html
  lastMod: timestamp(),
}

export const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.md*',
  schema: s
    .object({
      ...baseSchema,
      ...metadataCommon,
      path: s.path().transform((value) => value.replace(/^pages\//, '')),
    })
    .transform((data) => ({ ...data, ...getBaseFields(), type: 'pages' })),
})

export const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.md*',
  schema: s
    .object({
      ...baseSchema,
      ...metadataCommon,
      path: s.path().transform((value) => value.replace(/^posts\//, '')),
      toc: s.toc(),
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      excerpt: s.excerpt(), // excerpt of markdown content
    })
    .transform((data) => ({ ...data, ...getBaseFields(), type: 'posts' })),
})
