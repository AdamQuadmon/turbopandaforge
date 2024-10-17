import type { Page } from '@turbopandaforge/types/content/pages'

import type { BlogPosting } from 'schema-dts'

interface GetBlogPostingSchema {
  siteUrl: string
  page: Page
}

/**
 * {@link https://schema.org/BlogPosting}
 */
export const getBlogPostingSchema = ({ siteUrl, page }: GetBlogPostingSchema): BlogPosting => {
  const { images, title, permalink } = page

  return {
    '@type': 'BlogPosting',
    headline: title,
    ...(images && { images }),
    url: `${siteUrl}${permalink}`,
  }
}
