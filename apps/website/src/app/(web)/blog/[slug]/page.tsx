import type { PropsWithSlug } from '@turbopandaforge/types/ui/base'
import { Article } from '@turbopandaforge/ui/page/article'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { MDXContent } from '~/components/mdx-content'
import { SEOPage } from '~/components/page'
import { getPostBySlug, getPosts } from '~/lib/content'

export function generateMetadata({ params: { slug } }: PropsWithSlug): Metadata {
  const post = getPostBySlug(slug)
  if (post == null) notFound()
  const { title, description } = post
  return { title, description }
}

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug: slug }))
}

export default function PostPage({ params: { slug } }: PropsWithSlug) {
  const post = getPostBySlug(slug)
  if (post == null) notFound()

  return (
    <SEOPage page={post}>
      <Article post={post} mdx={<MDXContent code={post.code} />} />
    </SEOPage>
  )
}
