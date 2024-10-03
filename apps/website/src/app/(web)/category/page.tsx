import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { getPageBySlug } from '~/lib/content'

import { categories } from '#content'

export default async function CategoriesPage() {
  const page = getPageBySlug('categories')

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: categories, title: 'Categories', heading: 'h1' }} />
    </Container>
  )
}
