import { Container, VStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarFullProps } from '@turbopandaforge/types/ui/navigation'

import { Navbar } from './navbar'
import { NavbarBottom } from './navbar-bottom'
import { NavbarTop } from './navbar-top'

export const NavbarFull = ({ navBottom, navbarMain, navbarTop }: NavbarFullProps) => {
  return (
    <VStack position="sticky" zIndex="navOver">
      <NavbarTop {...navbarTop} />
      <Container>
        <VStack>
          <Navbar {...navbarMain} />
          <NavbarBottom nav={navBottom} />
        </VStack>
      </Container>
    </VStack>
  )
}
