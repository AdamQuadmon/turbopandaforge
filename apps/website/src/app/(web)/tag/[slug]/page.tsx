import type { PropsWithSlug } from '@turbopandaforge/types/ui/base'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { SEOPage } from '~/components/page'
import { getPostByTag, getTagBySlug, getTags } from '~/lib/content'

export function generateMetadata({ params: { slug } }: PropsWithSlug): Metadata {
  const tag = getTagBySlug(slug)
  if (tag == null) notFound()
  const { title, description } = tag
  return { title, description }
}

export function generateStaticParams() {
  return getTags().map(({ slug }) => ({ slug }))
}

export default function TagPage({ params: { slug } }: PropsWithSlug) {
  const tag = getTagBySlug(slug)
  if (tag == null) notFound()
  const { title } = tag

  const posts = getPostByTag(tag.slug)

  return (
    <SEOPage page={tag}>
      <PageCards {...{ pages: posts, title, heading: 'h1' }} />
    </SEOPage>
  )
}
