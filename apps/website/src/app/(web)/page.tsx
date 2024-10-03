import { Box, Container } from '@turbopandaforge/styled-system/jsx'

import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'
import { getLatestPost, getPageBySlug } from '~/lib/content'

export default async function HomePage() {
  const page = getPageBySlug('home')
  const posts = getLatestPost()

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: posts, title: 'Home', heading: 'h2' }} />
    </Container>
  )
}
