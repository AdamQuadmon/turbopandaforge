import { Container } from '@turbopandaforge/styled-system/jsx'
import type { PropsWithSlug } from '@turbopandaforge/types/ui/base'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCategories, getCategoryBySlug, getPostByCategory } from '~/lib/content'

export function generateMetadata({ params: { slug } }: PropsWithSlug): Metadata {
  const category = getCategoryBySlug(slug)
  if (category == null) return {}
  return { title: category.name }
}

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }))
}

export default function CategoryPage({ params: { slug } }: PropsWithSlug) {
  const category = getCategoryBySlug(slug)
  if (category == null) notFound()
  const posts = getPostByCategory(category.name)

  return (
    <Container>
      <PageCards {...{ pages: posts, title: category.name, heading: 'h1' }} />
    </Container>
  )
}
