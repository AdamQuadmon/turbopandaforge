import type { PropsWithSlug } from '@turbopandaforge/types/ui/base'
import { Article } from '@turbopandaforge/ui/page/article'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getPostBySlug, getPosts } from '~/lib/content'
import { MDXContent } from '~/mdx-content'

export function generateMetadata({ params: { slug } }: PropsWithSlug): Metadata {
  const post = getPostBySlug(slug)
  if (post == null) return {}
  return { title: post.title }
}

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }))
}

export default function PostPage({ params: { slug } }: PropsWithSlug) {
  const post = getPostBySlug(slug)
  if (post == null) notFound()

  return <Article post={post} mdx={<MDXContent code={post.code} />} />
}
