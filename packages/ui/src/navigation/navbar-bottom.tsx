import { HStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarBottomProps } from '@turbopandaforge/types/ui/navigation'

import { Badge } from '../core/badge'

export const NavbarBottom = ({ nav }: NavbarBottomProps) => {
  return (
    <HStack justify="flex-start" gap="2" w="full">
      {nav.map((x, i) => (
        <Badge variant="subtle" key={i}>
          {x}
        </Badge>
      ))}
    </HStack>
  )
}
