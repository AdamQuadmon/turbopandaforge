import { exec } from 'node:child_process'
import { promisify } from 'node:util'
import { type Collection, defineCollection, s } from 'velite'

const execAsync = promisify(exec)

const meta = s
  .object({
    title: s.string().optional(),
    description: s.string().optional(),
    keywords: s.array(s.string()).optional(),
  })
  .default({})

const timestamp = () =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === 'string')
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: 'custom',
          message: '`s.timestamp()` schema will resolve the value from `git log -1 --format=%cd`',
        })
      }
      const { stdout } = await execAsync(`git log -1 --format=%cd ${meta.path}`)
      return stdout ? new Date(stdout).toISOString() : new Date().toISOString()
    })

const basePageSchema = {
  priority: s.string(),
  title: s.string().max(99),
  cover: s.image().optional(), // input image relative path, output image object with blurImage.
  description: s.string().max(999).optional(),
  draft: s.boolean().default(false),
  meta: meta,
  toc: s.toc(),
  metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
  excerpt: s.excerpt(), // excerpt of markdown content
  content: s.markdown(), // transform markdown to html
  status: s.string().optional(),
  code: s.mdx(), // transform mdx to react
}

export const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s
    .object({
      ...basePageSchema,
      slug: s.slug('page'),
    })
    .transform((data) => ({ ...data, permalink: `/${data.slug}` })),
})

export const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.md',
  schema: s
    .object({
      ...basePageSchema,
      slug: s.slug('post'), // validate format, unique in posts collection
      date: s.isodate(), // input Date-like string, output ISO Date string.
      updated: timestamp(),
      video: s.file().optional(), // input file relative path, output file public path.
      featured: s.boolean().default(false),
      category: s.string().default('Journal'),
      tags: s.array(s.string()).default([]),
    })
    .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
})
