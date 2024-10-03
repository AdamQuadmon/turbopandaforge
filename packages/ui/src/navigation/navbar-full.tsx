'use client'
import { Container, VStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarFullProps } from '@turbopandaforge/types/ui/navigation'

import { useScrollDirection } from '../hooks/use-scroll-direction'
import { useScrollProgress } from '../hooks/use-scroll-progress'

import { Navbar } from './navbar'
import { NavbarBottom } from './navbar-bottom'
import { NavbarTop } from './navbar-top'

export const NavbarFull = ({ navBottom, navbarMain, navbarTop }: NavbarFullProps) => {
  const direction = useScrollDirection()
  const progress = useScrollProgress()
  return (
    <VStack
      position="sticky"
      top="0"
      zIndex="navUnder"
      opacity={progress > 5 && direction === 'down' ? 0 : 0.97}
      pb="2"
      borderBottomColor={progress < 1 ? 'bg.canvas' : 'gray.subtle'}
      borderBottomWidth="thin"
      bgColor="bg.canvas"
      transitionProperty="background-color, border-color, opacity"
      transitionDuration="slow"
      transitionTimingFunction="easeOut"
    >
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
