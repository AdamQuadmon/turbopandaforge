import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { getPageBySlug } from '~/lib/content'

import { posts } from '#content'

export default async function BlogPage() {
  const page = getPageBySlug('blog')

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: posts, title: 'Blog', heading: 'h1' }} />
    </Container>
  )
}
