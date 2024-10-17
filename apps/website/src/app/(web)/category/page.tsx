import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'

import { SEOPage } from '~/components/page'
import { createMetadata, getCategories, getPageBySlug } from '~/lib/content'

export const generateMetadata = (): Metadata => {
  const { title, description } = getPageBySlug('category') || createMetadata('category')

  return {
    title,
    description,
  }
}

export default function CategoriesPage() {
  const page = getPageBySlug('category') || createMetadata('category')
  const { title } = page

  const categories = getCategories()

  return (
    <SEOPage page={page}>
      <PageCards {...{ pages: categories, title, heading: 'h1' }} />
    </SEOPage>
  )
}
