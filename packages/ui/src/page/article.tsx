import { Box, Container, Stack } from '@turbopandaforge/styled-system/jsx'
import type { PageMetadata } from '@turbopandaforge/types/content/pages'
import type { ReactElement } from 'react'
import { Heading } from '../core/heading'
import { Prose } from '../core/prose'
import { Text } from '../core/text'
import { ProgressBar } from './progress-bar'
import { TableOfContent } from './table-of-content'

interface ArticleProps {
  post: PageMetadata
  mdx: ReactElement
}

export const Article = ({ post, mdx }: ArticleProps) => {
  return (
    <article>
      <ProgressBar selector="article" visual="pageH" orientation="horizontal" hideFrom="md" />
      <ProgressBar selector="article" visual="pageV" orientation="vertical" hideBelow="md" />
      <Container display="flex" py="12" gap="8" justifyContent="center">
        <Stack gap="16" px={{ base: '0', xl: '8' }} width="full">
          <Prose css={{ maxWidth: '45rem', mx: 'auto', width: '100%' }}>
            <Heading as="h1" fontWeight="bold">
              {post.title}
            </Heading>
            <Text className="lead" color="fg.muted" mb="6">
              {post.description}
            </Text>
            {mdx}
          </Prose>
        </Stack>
        <Box flexGrow="1" width="full" maxW="14rem" display={{ base: 'none', xl: 'block' }}>
          <Box position="fixed">
            <TableOfContent entries={post.toc} />
          </Box>
        </Box>
      </Container>
    </article>
  )
}
