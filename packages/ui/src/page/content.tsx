import type { PostPage } from '@turbopandaforge/types/content/pages'

import type { ReactElement } from 'react'

import { Heading } from '../core/heading'
import { PageDate } from './date'

interface PageContentProps {
  page: PostPage
  children: ReactElement
}

export const PageContent = ({ page, children }: PageContentProps) => {
  const { type, title } = page

  return (
    <article>
      <header>
        {'posts' === type && <PageDate page={page} />}

        <Heading as="h1" mb="6" textStyle="7xl">
          {title}
        </Heading>
        {children}
      </header>
    </article>
  )
}
