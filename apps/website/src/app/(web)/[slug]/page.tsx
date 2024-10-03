import type { PropsWithParams } from '@turbopandaforge/types/ui/base'
import { Article } from '@turbopandaforge/ui/page/article'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPageBySlug } from '~/lib/content'
import { MDXContent } from '~/mdx-content'

import { pages } from '#content'

export function generateMetadata({ params }: PropsWithParams): Metadata {
  const page = getPageBySlug(params.slug)
  if (page == null) return {}
  return { title: page.title }
}

export function generateStaticParams(): PropsWithParams['params'][] {
  return pages.map((page) => ({ slug: page.slug }))
}

export default function PagePage({ params }: PropsWithParams) {
  const page = getPageBySlug(params.slug)

  if (page == null) notFound()

  return <Article post={page} mdx={<MDXContent code={page.code} />} />
}
