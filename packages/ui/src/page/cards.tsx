import type { Page } from '@turbopandaforge/types/content/pages'

import {
  type HeadingTitles,
  type TextSizes,
  getNextHalfSize,
  getNextHeading,
} from '../lib/headings'

import { Wrap } from '@turbopandaforge/styled-system/jsx'
import { Heading } from '../core/heading'
import { PageCard } from './card'

interface PageCardsProps {
  pages: Page[]
  title: string
  heading?: HeadingTitles
  size?: TextSizes
}

export const PageCards = ({ pages, title, heading = 'h1', size = '6xl' }: PageCardsProps) => {
  const subHeading = getNextHeading(heading)
  const subSize = getNextHalfSize(size)
  return (
    <section>
      <Heading as={heading} textStyle={size}>
        {title}
      </Heading>
      <Wrap gap="4" pl="2">
        {pages.map((page, k) => (
          <PageCard key={k} page={page} w="32%" heading={subHeading} size={subSize} />
        ))}
      </Wrap>
    </section>
  )
}
