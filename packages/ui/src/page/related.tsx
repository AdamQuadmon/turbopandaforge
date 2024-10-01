import { Stack } from '@turbopandaforge/styled-system/jsx'
import type { BasePage } from '@turbopandaforge/types/content/pages'

import { PageCards } from './cards'

interface RelatedPages {
  title: string
  pages: BasePage[]
}

interface PageRelatedProps {
  relatedPages: RelatedPages[]
}

export const PageRelated = ({ relatedPages }: PageRelatedProps) => {
  return (
    <Stack>
      {relatedPages.map(({ pages, title }, k) => (
        <Stack key={k}>
          <PageCards pages={pages} title={title} />
        </Stack>
      ))}
    </Stack>
  )
}
