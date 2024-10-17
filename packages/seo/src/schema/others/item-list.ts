import type { Page } from '@turbopandaforge/types/content/pages'

import type { ItemList } from 'schema-dts'

import { getBlogPostingSchema } from './blog-posting'

interface GetItemListSchemaParams {
  siteUrl: string
  pages: Page[]
}

export const getItemListSchema = ({ siteUrl, pages }: GetItemListSchemaParams): ItemList => {
  return {
    '@type': 'ItemList',
    itemListElement: pages.map((page) => ({
      ...getBlogPostingSchema({ siteUrl, page }),
    })),
  }
}
