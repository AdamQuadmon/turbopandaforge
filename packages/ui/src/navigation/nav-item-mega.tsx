'use client'
import { Portal } from '@ark-ui/react'
import { ChevronDown } from 'lucide-react'

import { Box, Container, Divider, Flex, HStack, Stack } from '@turbopandaforge/styled-system/jsx'
import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'

import { Button } from '../core/button'
import { Heading } from '../core/heading'
import { HoverCard } from '../core/hover-card'
import { Text } from '../core/text'

export const NavItemMega = ({ size, title, items }: NavItemProps) => {
  return (
    <HoverCard.Root
      positioning={{
        placement: 'top',
        gutter: 0,
        fitViewport: true,
        slide: true,
      }}
      openDelay={0}
    >
      <HoverCard.Trigger asChild>
        <Button variant="ghost" size={size} borderBottomRadius="none">
          <Heading textStyle="2xl" fontWeight="medium" fontFamily="mono">
            {title}
          </Heading>
          <ChevronDown />
        </Button>
      </HoverCard.Trigger>

      <Portal>
        <HoverCard.Positioner width="100%">
          <HoverCard.Content
            minH="calc(100vh - 90px)"
            maxWidth="inherit"
            borderRadius="none"
            bgColor="bg.default/90"
          >
            <Container>
              <Flex flexDir="row" flexWrap="wrap" justify="space-evenly" mx="8" gap="8" pt="12">
                {items?.map((item, k) => (
                  <MegaItems {...item} key={k} />
                ))}
              </Flex>
            </Container>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  )
}

export const MegaItems = ({ title, icon, items }: NavItemProps) => {
  return (
    <Box>
      <HStack>
        <Heading size="5xl" fontFamily="mono">
          {title}
        </Heading>
        {icon}
      </HStack>
      <Divider thickness="0.7em" my="4" color="accent.9" />

      <Flex gap="10" flexWrap="wrap" justify="space-evenly">
        {items?.map((item, k) =>
          item.items ? <MegaSubItems {...item} key={k} /> : <MegaItem {...item} key={k} />,
        )}
      </Flex>
    </Box>
  )
}

export const MegaSubItems = ({ icon, title, items }: NavItemProps) => {
  return (
    <Stack gap="0">
      <MegaSubLabel {...{ title, icon }} />
      {items?.map((item, k) => (
        <MegaItem {...item} key={k} />
      ))}
    </Stack>
  )
}

export const MegaSubLabel = ({ title, icon }: NavItemProps) => {
  return (
    <HStack gap="4">
      <Heading fontSize="2xl" fontFamily="mono">
        {title}
      </Heading>
      {icon}
    </HStack>
  )
}

export const MegaItem = ({ title, icon, info }: NavItemProps) => {
  return (
    <HStack gap="6">
      <MegaItemLabel {...{ title, icon }} />
      {info && (
        <Text as="span" color="fg.subtle" size="sm">
          {info}
        </Text>
      )}
    </HStack>
  )
}

export const MegaItemLabel = ({ title, icon }: NavItemProps) => {
  return (
    <HStack gap="8">
      {icon}
      <Heading>{title}</Heading>
    </HStack>
  )
}
