import type { Route } from 'next'
import Link from 'next/link'

import type { BasePage } from '@turbopandaforge/types/content/pages'

import { type HeadingTitles, type TextSizes, getNextHeading, getNextSize } from '../lib/headings'

import { Card } from '../core/card'
import { Heading } from '../core/heading'

interface PageCardProps extends Omit<Card.RootProps, 'page'> {
  page: BasePage
  heading?: HeadingTitles
  size?: TextSizes
}

export const PageCard = ({ page, heading = 'h2', size = '5xl', ...props }: PageCardProps) => {
  const subHeading = getNextHeading(heading)

  const { title, slug, excerpt } = page
  return (
    <Card.Root {...props}>
      <Card.Title asChild>
        <Heading as={heading} mb="6" p="3" textStyle={size}>
          <Link href={`/blog/${slug}` as Route}>{title}</Link>
        </Heading>
      </Card.Title>
      <Card.Body>{excerpt}</Card.Body>
      <Card.Footer>
        <Heading as={subHeading}>{slug}</Heading>
      </Card.Footer>
    </Card.Root>
  )
}
