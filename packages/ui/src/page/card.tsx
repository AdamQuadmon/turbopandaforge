import type { Route } from 'next'
import NextLink from 'next/link'

import type { BasePage } from '@turbopandaforge/types/content/pages'

import { type HeadingTitles, getSubTitleAs } from '../lib/headings'

import { Card } from '../core/card'
import { Heading } from '../core/heading'

interface PageCardProps {
  page: BasePage
  titleAs?: HeadingTitles
}

export const PageCard = ({ page, titleAs = 'h2' }: PageCardProps) => {
  const subTitleAs = getSubTitleAs(titleAs)
  const { title, path, excerpt } = page
  return (
    <Card.Root>
      <Card.Title>
        <Heading as={titleAs} mb="6" textStyle="6xl">
          <NextLink href={path as Route}>{title}</NextLink>
        </Heading>
      </Card.Title>
      <Card.Body>{excerpt}</Card.Body>
      <Card.Footer>
        <Heading as={subTitleAs}>{path}</Heading>
      </Card.Footer>
    </Card.Root>
  )
}
