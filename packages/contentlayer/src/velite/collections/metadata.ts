import { defineCollection, s } from 'velite'
import { reserved } from '../validators/reserved'

const type = s.enum(['categories', 'images', 'pages', 'posts', 'tags'])

/**
 * Schema:
 *
 * `type` - the collection this metadata slug refers to
 * `path` - used with `type` to match the collection element
 * `slug` - override path based slug
 * `status` - using 'published' will display content on production
 * `date` - published date
 * `name` - used for labels
 * `title` - SEO field
 * `description` - SEO field
 * `priority` - used to order by position
 * `featured` - add content to featured
 * `category` - not used on categories type
 * `tags` - not used on tags type
 * `keywords` - SEO field, not used on categories and tags types
 * `author` - should point to an authors collection, not used on categories and tags types
 */
export const metadataCommon = {
  authors: s
    .string()
    .transform((val) => val.split(';').map(String))
    .pipe(s.string().array())
    .nullable()
    .optional(),
  category: s.string().nullable().optional(),
  date: s.isodate().nullable().optional(),
  description: s.string().max(999).nullable().optional(),
  featured: s.boolean().default(false).nullable().optional(),
  locale: s.string().max(2).nullable().optional(),
  keywords: s
    .string()
    .transform((val) => val.split(';').map(String))
    .pipe(s.string().array())
    .nullable()
    .optional(),
  name: s.string().max(20).nullable().optional(),
  priority: s.string().nullable().optional(),
  status: s.string().default('draft').nullable().optional(),
  tags: s
    .string()
    .transform((val) => val.split(';'))
    .pipe(s.string().array())
    .nullable()
    .optional(),
  title: s.string().max(99).nullable().optional(),
}

/**
 * Metadata for different collections pages
 */
export const metadata = defineCollection({
  name: 'Metadata',
  pattern: 'data/metadata.csv',
  schema: s.object({
    ...metadataCommon,
    type,
    path: s.string().min(1),
    slug: s.slug('global', reserved).nullable().optional(),
  }),
})
