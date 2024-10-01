import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'

import { Button } from '../core/button'

export const NavItemTitle = ({ size, title }: NavItemProps) => {
  return (
    <Button variant="outline" size={size}>
      {title}
    </Button>
  )
}
