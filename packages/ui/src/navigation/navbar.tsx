import { Box, HStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarProps } from '@turbopandaforge/types/ui/navigation'

import { Button } from '../core/button'
import { Text } from '../core/text'

import { ColorModeButton } from '../interaction/color-mode-button'
import { SearchForm } from '../interaction/search'

import { NavItemMega } from './nav-item-mega'
import { NavItemTitle } from './nav-item-title'

// TODO: highlight current element
export const Navbar = ({ brand, navPrimary, navSecondary, cta }: NavbarProps) => {
  return (
    <HStack justify="space-between" w="full">
      <HStack gap="4" w="2/3">
        {brand}
        <HStack gap="0">
          {navPrimary.map(({ size, title, items }, k) =>
            items ? (
              <NavItemMega {...{ size, title, items }} key={k} />
            ) : (
              <NavItemTitle {...{ size, title }} key={k} />
            ),
          )}
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
