import type { PropsWithRest } from '@turbopandaforge/types/ui/base'
import { Article } from '@turbopandaforge/ui/page/article'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { MDXContent } from '~/components/mdx-content'
import { SEOPage } from '~/components/page'
import { getPageOrCategoryByPermalink, getPagesAndCategories } from '~/lib/content'
import { CategoryPage } from './page-types/category'

export function generateMetadata({ params: { rest } }: PropsWithRest): Metadata {
  const slug = rest.join('/')
  const page = getPageOrCategoryByPermalink(`/${slug}`)
  if (page == null) notFound()

  const { title, description } = page
  return { title, description }
}

export function generateStaticParams() {
  return getPagesAndCategories().map((element) => ({ rest: element.permalink.split('/') }))
}

export default function RestPage({ params: { rest } }: PropsWithRest) {
  const slug = rest.join('/')
  const page = getPageOrCategoryByPermalink(`/${slug}`)

  if (page == null) notFound()

  const isPage = 'pages' === page.type

  return (
    <SEOPage page={page}>
      {isPage ? (
        <Article post={page} mdx={<MDXContent code={page.code} />} />
      ) : (
        <CategoryPage category={page} />
      )}
    </SEOPage>
  )
}
