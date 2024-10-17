import { generateSitemap } from '@turbopandaforge/seo/generators/sitemap'
import type { MetadataRoute } from 'next'

import { pathnames, siteUrl } from '~/config/routing'
import { getCategories, getPages, getPosts, getTags } from '~/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts()
  const pages = getPages()
  const categories = getCategories()
  const tags = getTags()

  return generateSitemap(siteUrl, [...posts, ...pages, ...categories, ...tags], pathnames)
}
