import { MenuIcon, XIcon } from 'lucide-react'

import type { OffCanvasProps } from '@turbopandaforge/types/ui/navigation'

import { Drawer } from '../core/drawer'
import { IconButton } from '../core/icon-button'

export const OffCanvas = ({ children, bottomButtons, title, description }: OffCanvasProps) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <IconButton aria-label="Open Menu" size="sm" variant="ghost">
          <MenuIcon />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>{title}</Drawer.Title>
            <Drawer.Description>{description}</Drawer.Description>
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
              <IconButton variant="ghost">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>{children}</Drawer.Body>
          <Drawer.Footer gap="3">
            <Drawer.CloseTrigger asChild>
              <IconButton aria-label="Close Sidebar" variant="outline">
                <XIcon />
              </IconButton>
            </Drawer.CloseTrigger>
            {bottomButtons}
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
