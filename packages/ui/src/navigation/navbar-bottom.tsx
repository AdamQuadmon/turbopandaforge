import { HStack } from '@turbopandaforge/styled-system/jsx'
import type { NavbarBottomProps } from '@turbopandaforge/types/ui/navigation'

export const NavbarBottom = ({ nav }: NavbarBottomProps) => {
  return (
    <HStack justify="flex-start" gap="2" w="full">
      {nav}
    </HStack>
  )
}
