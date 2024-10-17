import { defineCollection, s } from 'velite'
import { count } from '../validators/count'
import { path } from '../validators/path'
import { reserved } from '../validators/reserved'
import { metadataCommon } from './metadata'

const { category, author, keywords, ...categoriesMetadata } = metadataCommon

export const categories = defineCollection({
  name: 'Category',
  pattern: 'categories/*.yml',
  schema: s
    .object({
      path: path('global', reserved),
      count,
      ...categoriesMetadata,
    })
    .transform((data) => ({
      ...data,
      permalink: '',
      slug: '',
      type: 'categories',
      children: [] as string[],
    })),
})
