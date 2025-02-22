import { Box } from '@turbopandaforge/styled-system/jsx'

import { CopyToClipboardButton } from '../interaction/copy-to-clipboard-button'

interface Props {
  html: string
  code: string
}

export const CodePreview = (props: Props) => {
  const { html, code, ...rest } = props
  return (
    <Box bg="gray.dark.2" position="relative" className="not-prose" {...rest}>
      <Box position="absolute" top="1" right="1" className="dark">
        <CopyToClipboardButton content={code} />
      </Box>
      <Box maxH="xl" overflow="auto" p="4" dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  )
}
