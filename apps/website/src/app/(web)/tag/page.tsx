import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'

import { SEOPage } from '~/components/page'
import { createMetadata, getPageBySlug, getTags } from '~/lib/content'

export const generateMetadata = (): Metadata => {
  const { title, description } = getPageBySlug('tag') || createMetadata('tag')

  return {
    title,
    description,
  }
}

export default function TagsPage() {
  const page = getPageBySlug('tag') || createMetadata('tag')
  const { title } = page

  const tags = getTags()

  return (
    <SEOPage page={page}>
      <PageCards {...{ pages: tags, title, heading: 'h1' }} />
    </SEOPage>
  )
}
