import type { PropsWithSlug } from '@turbopandaforge/types/ui/base'
import { Article } from '@turbopandaforge/ui/page/article'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPageBySlug, getPages } from '~/lib/content'
import { MDXContent } from '~/mdx-content'

export function generateMetadata({ params: { slug } }: PropsWithSlug): Metadata {
  const page = getPageBySlug(slug)
  if (page == null) return {}
  return { title: page.title }
}

export function generateStaticParams() {
  return getPages().map((page) => ({ slug: page.slug }))
}

export default function PagePage({ params: { slug } }: PropsWithSlug) {
  const page = getPageBySlug(slug)
  if (page == null) notFound()

  return <Article post={page} mdx={<MDXContent code={page.code} />} />
}
