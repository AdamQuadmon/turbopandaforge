import { Box, HStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarProps } from '@turbopandaforge/types/ui/navigation'

import { Button } from '../core/button'
import { Text } from '../core/text'

import { ColorModeButton } from '../interaction/color-mode-button'
import { SearchForm } from '../interaction/search'

import Link from 'next/link'
import { NavItemMega } from './nav-item-mega'

export const Navbar = ({ brand, navPrimary, navSecondary, cta }: NavbarProps) => {
  return (
    <HStack justify="space-between" w="full" zIndex="navOver">
      <HStack gap="4">
        <Link href="/">{brand}</Link>
        <HStack gap="0">
          {navPrimary.map((navItem, k) => (
            <NavItemMega {...navItem} key={k} />
          ))}
        </HStack>
        <SearchForm />
        <ColorModeButton />
      </HStack>
      <HStack justify="end" gap="4">
        <HStack gap="1" display={{ base: 'none', xl: 'flex' }}>
          {navSecondary.map((navItem, k) => (
            <Button key={k} variant="ghost" size="md">
              <Text fontSize="lg">{navItem.title}</Text>
              <Box color={{ _light: 'accent.11', _dark: 'accent.9' }}>{navItem.icon}</Box>
            </Button>
          ))}
          {cta}
        </HStack>
      </HStack>
    </HStack>
  )
}
