'use client'

import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import { Button } from '@turbopandaforge/ui/core/button'
import { Heading } from '@turbopandaforge/ui/core/heading'
import { Text } from '@turbopandaforge/ui/core/text'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

type Props = {
  error: Error
  reset(): void
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({ error, reset }: Props) {
  const t = useTranslations('Error')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container>
      <Box className={background({ visual: 'radiant' })} />
      <Heading>{t('title')}</Heading>
      <Box>
        {t.rich('description', {
          p: (chunks) => <Text>{chunks}</Text>,
          retry: (chunks) => <Button onClick={reset}>{chunks}</Button>,
        })}
      </Box>
    </Container>
  )
}
