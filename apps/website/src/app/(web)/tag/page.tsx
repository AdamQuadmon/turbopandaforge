import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { getPageBySlug } from '~/lib/content'

import { tags } from '#content'

export default async function TagsPage() {
  const page = getPageBySlug('tags')

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: tags, title: 'Tags', heading: 'h1' }} />
    </Container>
  )
}
