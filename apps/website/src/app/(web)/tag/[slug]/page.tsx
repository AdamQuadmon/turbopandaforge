import { Container } from '@turbopandaforge/styled-system/jsx'
import type { PropsWithParams } from '@turbopandaforge/types/ui/base'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPostByTag, getTagBySlug } from '~/lib/content'

import { tags } from '#content'

export function generateMetadata({ params }: PropsWithParams): Metadata {
  const tag = getTagBySlug(params.slug)
  if (tag == null) return {}
  return { title: tag.name }
}

export function generateStaticParams(): PropsWithParams['params'][] {
  return tags.map((tag) => ({ slug: tag.slug }))
}

export default function TagPage({ params }: PropsWithParams) {
  const tag = getTagBySlug(params.slug)
  const posts = getPostByTag(tag.name)

  if (tag == null) notFound()

  return (
    <Container>
      <PageCards {...{ pages: posts, title: tag.name, heading: 'h1' }} />
    </Container>
  )
}
