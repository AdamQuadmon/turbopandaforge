import type { ArticleType } from '../seo/article'
import type { PageType } from '../seo/page'

/**
 * Base Metadata enabled Page reflecting Velite Collections such as Page, Post, Category, Tag
 */
export interface Page {
  authors: string[]
  category: string
  code: string
  content: string
  date?: string
  description?: string
  featured?: boolean
  images?: string[]
  lastMod: string
  locale: string
  keywords: string[]
  name?: string
  mainEntity?: string
  pageType?: PageType
  path: string
  permalink: string
  priority: string
  slug: string
  status?: string
  tags: string[]
  title: string
  type: string
}

export interface PostPage extends Page {
  articleType?: ArticleType
  metadata: {
    readingTime: number
    wordCount: number
  }
  excerpt: string
  toc?: TocEntry[]
}
export interface CategoryPage extends Page {
  children?: []
}

export interface TocEntry {
  /**
   * Title of the entry
   */
  title: string
  /**
   * URL that can be used to reach
   * the content
   */
  url: string
  /**
   * Nested items
   */
  items: TocEntry[]
}
