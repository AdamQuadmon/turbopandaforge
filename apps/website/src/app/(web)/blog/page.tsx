import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'

import { SEOPage } from '~/components/page'
import { createMetadata, getPageBySlug, getPosts } from '~/lib/content'

export const generateMetadata = (): Metadata => {
  const { title, description } = getPageBySlug('blog') || createMetadata('blog')

  return {
    title,
    description,
  }
}

export default function BlogPage() {
  const page = getPageBySlug('blog') || createMetadata('blog')
  const { title } = page

  const posts = getPosts()

  return (
    <SEOPage page={page}>
      <PageCards {...{ pages: posts, title, heading: 'h1' }} />
    </SEOPage>
  )
}
