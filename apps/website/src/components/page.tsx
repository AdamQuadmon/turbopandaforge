import { getWebPageSchema } from '@turbopandaforge/seo/schema/webpage'
import { JSON_LD } from '@turbopandaforge/seo/ui/json-ld'
import { Box, Container } from '@turbopandaforge/styled-system/jsx'
import { background } from '@turbopandaforge/styled-system/recipes'
import type { Page } from '@turbopandaforge/types/content/pages'

import type { PropsWithChildren } from 'react'

import { siteUrl } from '~/config/routing'

interface PageI extends PropsWithChildren {
  page: Page
}

export const SEOPage = ({ page, children }: PageI) => {
  const jsonLd = getWebPageSchema({ siteUrl, page })

  return (
    <Container>
      <JSON_LD {...jsonLd} />
      <Box className={background({ visual: 'radiant' })} />
      {children}
    </Container>
  )
}
