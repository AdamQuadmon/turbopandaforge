import { Box } from '@turbopandaforge/styled-system/jsx'
import type { Page } from '@turbopandaforge/types/content/pages'
import { Header } from '@turbopandaforge/ui/core/styled/card'
import { PageCards } from '@turbopandaforge/ui/page/cards'
import { getPostByCategories } from '~/lib/content'

export const CategoryPage = ({ category }: { category: Page }) => {
  const { title } = category

  const categories = [category.path, ...(category.children || [])]

  const posts = getPostByCategories(categories)

  return (
    <Box>
      <Header>Category {title}</Header>

      <PageCards {...{ pages: posts, title, heading: 'h1' }} />
    </Box>
  )
}
