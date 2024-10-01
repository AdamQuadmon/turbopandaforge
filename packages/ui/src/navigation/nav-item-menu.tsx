import { HStack } from '@turbopandaforge/styled-system/jsx'
import { ChevronRightIcon } from 'lucide-react'

import { Button } from '../core/button'
import { Menu } from '../core/menu'
import { Text } from '../core/text'

import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'

export const NavItemMenu = ({ size, title, items }: NavItemProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size={size}>
          {title}
          <Menu.Positioner>
            <Menu.Content>
              {items?.map((item, k) => (
                <MenuItemGroup {...item} key="k" />
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Button>
      </Menu.Trigger>
    </Menu.Root>
  )
}

export const MenuItemGroup = ({ title, items }: NavItemProps) => {
  return (
    <Menu.ItemGroup>
      <Menu.ItemGroupLabel>{title}</Menu.ItemGroupLabel>
      <Menu.Separator />

      {items?.map((item, k) =>
        item.items ? <SubMenuItemGroup {...item} key="k" /> : <MenuItem {...item} key="k" />,
      )}
    </Menu.ItemGroup>
  )
}

export const SubMenuItemGroup = ({ icon, title, items }: NavItemProps) => {
  return (
    <Menu.Root positioning={{ placement: 'right-start', gutter: -2 }}>
      <Menu.TriggerItem justifyContent="space-between">
        <MenuItemLabel {...{ title, icon }} />
        <ChevronRightIcon />
      </Menu.TriggerItem>
      <Menu.Positioner>
        <Menu.Content>
          {items?.map((item, k) => (
            <MenuItem {...item} key="k" />
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export const MenuItem = ({ title, icon, info }: NavItemProps) => {
  return (
    <Menu.Item value="profile">
      <HStack gap="6" justify="space-between" flex="1">
        <MenuItemLabel {...{ title, icon }} />
        {info && (
          <Text as="span" color="fg.subtle" size="sm">
            {info}
          </Text>
        )}
      </HStack>
    </Menu.Item>
  )
}

export const MenuItemLabel = ({ title, icon }: NavItemProps) => {
  return (
    <HStack gap="2">
      {icon}
      {title}
    </HStack>
  )
}
