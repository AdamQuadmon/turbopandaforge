import { Box, HStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarTopProps } from '@turbopandaforge/types/ui/navigation'

import { Text } from '../core/text'

export const NavbarTop = ({ left, center, right }: NavbarTopProps) => {
  return (
    <HStack px="2" justify="space-between" w="full" color="gray.11">
      <Box>{left}</Box>
      <Text color="accent.11">{center}</Text>
      <Box>{right}</Box>
    </HStack>
  )
}
