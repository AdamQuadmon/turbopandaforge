// 'use client'
import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { Heading } from '@turbopandaforge/ui/core/heading'
import { Text } from '@turbopandaforge/ui/core/text'

import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage')

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <Heading>{t('title')}</Heading>
      <Text>{t('description')}</Text>
    </Container>
  )
}
