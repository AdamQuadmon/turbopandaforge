import type { BasePage } from '@turbopandaforge/types/content/pages'

import { type HeadingTitles, getSubTitleAs } from '../lib/headings'

import { Heading } from '../core/heading'
import { PageCard } from './card'

interface PageCardsProps {
  pages: BasePage[]
  title: string
  titleAs?: HeadingTitles
}

// TODO add recipe
export const PageCards = ({ pages, title, titleAs = 'h2' }: PageCardsProps) => {
  const subTitleAs = getSubTitleAs(titleAs)
  return (
    <section>
      <Heading as={titleAs}>{title}</Heading>
      {pages.map((page, k) => (
        <PageCard key={k} page={page} titleAs={subTitleAs} />
      ))}
    </section>
  )
}
