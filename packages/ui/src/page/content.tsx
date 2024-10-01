import type { ReactElement } from 'react'

import type { BasePage } from '@turbopandaforge/types/content/pages'

import type { HeadingTitles } from '../lib/headings'

import { Heading } from '../core/heading'

import { PageCover } from './cover'
import { PageDate } from './date'

interface PageContentProps {
  page: BasePage
  titleAs?: HeadingTitles
  children: ReactElement
}

// TODO make this articleType specific
export const PageContent = ({ page, children }: PageContentProps) => {
  const { articleType, title } = page

  return (
    <article>
      <PageCover page={page} />
      <header>
        {articleType && <PageDate page={page} />}

        <Heading as="h1" mb="6" textStyle="7xl">
          {title}
        </Heading>
        {children}
      </header>
    </article>
  )
}
