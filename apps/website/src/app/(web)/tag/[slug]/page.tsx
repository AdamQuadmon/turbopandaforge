import { Container } from '@turbopandaforge/styled-system/jsx'
import type { PropsWithSlug } from '@turbopandaforge/types/ui/base'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPostByTag, getTagBySlug, getTags } from '~/lib/content'

export function generateMetadata({ params: { slug } }: PropsWithSlug): Metadata {
  const tag = getTagBySlug(slug)
  if (tag == null) return {}
  return { title: tag.name }
}

export function generateStaticParams() {
  return getTags().map((tag) => ({ slug: tag.slug }))
}

export default function TagPage({ params: { slug } }: PropsWithSlug) {
  const tag = getTagBySlug(slug)
  if (tag == null) notFound()
  const posts = getPostByTag(tag.name)

  return (
    <Container>
      <PageCards {...{ pages: posts, title: tag.name, heading: 'h1' }} />
    </Container>
  )
}
