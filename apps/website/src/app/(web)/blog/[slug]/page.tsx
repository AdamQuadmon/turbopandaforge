import type { PropsWithParams } from '@turbopandaforge/types/ui/base'
import { Article } from '@turbopandaforge/ui/page/article'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPostBySlug } from '~/lib/content'
import { MDXContent } from '~/mdx-content'

import { posts } from '#content'

export function generateMetadata({ params }: PropsWithParams): Metadata {
  const post = getPostBySlug(params.slug)
  if (post == null) return {}
  return { title: post.title }
}

export function generateStaticParams(): PropsWithParams['params'][] {
  return posts.map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params }: PropsWithParams) {
  const post = getPostBySlug(params.slug)

  if (post == null) notFound()

  return <Article post={post} mdx={<MDXContent code={post.code} />} />
}
