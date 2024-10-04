import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { useTranslations } from 'next-intl'

import { getPosts } from '~/lib/content'

export default function BlogPage() {
  const t = useTranslations('BlogPage')
  const posts = getPosts()

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: posts, title: t('title'), heading: 'h1' }} />
    </Container>
  )
}
