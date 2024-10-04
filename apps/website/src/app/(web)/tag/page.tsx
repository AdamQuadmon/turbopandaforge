import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { useTranslations } from 'next-intl'

import { getTags } from '~/lib/content'

export default function TagsPage() {
  const t = useTranslations('TagsPage')
  const tags = getTags()

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: tags, title: t('title'), heading: 'h1' }} />
    </Container>
  )
}
