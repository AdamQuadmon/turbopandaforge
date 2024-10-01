'use client'

import { useEffect, useState } from 'react'

import { Stack } from '@turbopandaforge/styled-system/jsx'
import type { SidebarProps } from '@turbopandaforge/types/ui/navigation'

import { SegmentGroup } from '../core/segment-group'
import { Text } from '../core/text'

export const Sidebar = ({ children, pathname, items }: SidebarProps) => {
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    setCurrentPath(pathname)
  }, [pathname])

  return (
    <Stack alignItems="stretch" gap="8">
      {children}
      {items.map((navItem, k) => (
        <Stack gap="3" key={k}>
          <Text fontWeight="semibold" textStyle={{ base: 'md', md: 'sm' }}>
            {navItem.title}
          </Text>
          <SegmentGroup.Root
            orientation="vertical"
            size={{ base: 'md', md: 'sm' }}
            value={currentPath}
          >
            {navItem.items?.map((subItem, j) => (
              <SegmentGroup.Item data-orientation="vertical" key={j} value={subItem.title}>
                <SegmentGroup.ItemControl />
                <SegmentGroup.ItemText display="inline-flex" gap="2">
                  {subItem.path}
                </SegmentGroup.ItemText>
              </SegmentGroup.Item>
            ))}
            <SegmentGroup.Indicator
              hidden={!navItem.items?.some((entry) => entry.path === currentPath)}
            />
          </SegmentGroup.Root>
        </Stack>
      ))}
    </Stack>
  )
}
