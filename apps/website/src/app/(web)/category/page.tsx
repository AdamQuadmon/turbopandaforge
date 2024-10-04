import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { PageCards } from '@turbopandaforge/ui/page/cards'

import { useTranslations } from 'next-intl'

import { getCategories } from '~/lib/content'

export default function CategoriesPage() {
  const t = useTranslations('CategoriesPage')
  const categories = getCategories()

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <PageCards {...{ pages: categories, title: t('title'), heading: 'h1' }} />
    </Container>
  )
}
