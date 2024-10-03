import { Box } from '@turbopandaforge/styled-system/jsx'
import { NavbarFull } from '@turbopandaforge/ui/navigation/navbar-full'

import type { PropsWithChildren } from 'react'

import { navbar } from '~/config/navigation'

export default async function WebLayout({ children }: PropsWithChildren) {
  return (
    <Box minH="100%">
      <NavbarFull {...navbar} />
      {children}
    </Box>
  )
}
