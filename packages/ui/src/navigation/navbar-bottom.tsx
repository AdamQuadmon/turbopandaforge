import { HStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarBottomProps } from '@turbopandaforge/types/ui/navigation'

import type { Route } from 'next'
import Link from 'next/link'
import { Badge } from '../core/badge'

export const NavbarBottom = ({ nav }: NavbarBottomProps) => {
  return (
    <HStack justify="flex-start" gap="2" w="full">
      {nav.map(({ title, path }, k) => (
        <Link href={path as Route} key={k}>
          <Badge variant="subtle">{title}</Badge>
        </Link>
      ))}
    </HStack>
  )
}
