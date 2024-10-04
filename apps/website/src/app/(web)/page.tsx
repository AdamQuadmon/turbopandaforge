import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { useTranslations } from 'next-intl'

import { getLatestPost } from '~/lib/content'

export default function HomePage() {
  const t = useTranslations('HomePage')
  const posts = getLatestPost()

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: posts, title: t('title'), heading: 'h2' }} />
    </Container>
  )
}
