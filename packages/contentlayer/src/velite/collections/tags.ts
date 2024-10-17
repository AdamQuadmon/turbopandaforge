import { defineCollection, s } from 'velite'
import { count } from '../validators/count'
import { metadataCommon } from './metadata'

const { tags: _tags, author, keywords, ...tagsMetadata } = metadataCommon

export const tags = defineCollection({
  name: 'Tag',
  pattern: 'tags/index.yml',
  schema: s
    .object({
      path: s.slug('tags'),
      count,
      ...tagsMetadata,
    })
    .transform((data) => ({ ...data, permalink: '', slug: '', type: 'tags' })),
})
