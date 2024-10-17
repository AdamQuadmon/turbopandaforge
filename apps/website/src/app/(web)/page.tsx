import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'

import { SEOPage } from '~/components/page'
import { createMetadata, getLatestPost, getPageBySlug } from '~/lib/content'

export const generateMetadata = (): Metadata => {
  const { title, description } = getPageBySlug('home') || createMetadata('home')

  return {
    title,
    description,
  }
}

export default function HomePage() {
  const page = getPageBySlug('home') || createMetadata('home')
  const { title } = page

  const posts = getLatestPost()

  return (
    <SEOPage page={page}>
      <PageCards {...{ pages: posts, title, heading: 'h2' }} />
    </SEOPage>
  )
}
