import { Container } from '@turbopandaforge/styled-system/jsx'
import type { PropsWithParams } from '@turbopandaforge/types/ui/base'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCategoryBySlug, getPostByCategory } from '~/lib/content'

import { categories } from '#content'

export function generateMetadata({ params }: PropsWithParams): Metadata {
  const category = getCategoryBySlug(params.slug)
  if (category == null) return {}
  return { title: category.name }
}

export function generateStaticParams(): PropsWithParams['params'][] {
  return categories.map((category) => ({ slug: category.slug }))
}

export default function CategoryPage({ params }: PropsWithParams) {
  const category = getCategoryBySlug(params.slug)
  const posts = getPostByCategory(category.name)

  if (category == null) notFound()

  return (
    <Container>
      <PageCards {...{ pages: posts, title: category.name, heading: 'h1' }} />
    </Container>
  )
}
