'use client'
import { Portal } from '@ark-ui/react'
import { ChevronDown } from 'lucide-react'

import { Box, Container, Divider, Flex, HStack, Stack } from '@turbopandaforge/styled-system/jsx'
import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'

import type { Route } from 'next'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

import { Button } from '../core/button'
import { Heading } from '../core/heading'
import { HoverCard } from '../core/hover-card'
import { Text } from '../core/text'

interface LinkIfHrefProps extends PropsWithChildren {
  href?: string
}

export const LinkIfHref = ({ href, children }: LinkIfHrefProps) => {
  return href ? <Link href={href as Route}>{children}</Link> : children
}

export const NavItemMega = ({ size, title, path, items }: NavItemProps) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <HoverCard.Root
      positioning={{
        placement: 'top',
        gutter: 0,
        fitViewport: true,
        slide: true,
      }}
      openDelay={700}
      open={isOpen}
    >
      <Box onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <HoverCard.Trigger asChild>
          <Link href={path as Route}>
            <Button
              variant="ghost"
              size={size}
              borderBottomRadius="none"
              onClick={() => setOpen(false)}
            >
              <Heading as="h3" textStyle="2xl" fontWeight="medium" fontFamily="mono">
                {title}
              </Heading>
              {items && <ChevronDown />}
            </Button>
          </Link>
        </HoverCard.Trigger>

        {items && (
          <Portal>
            <HoverCard.Positioner width="100%">
              <HoverCard.Content
                minH="calc(100vh - 90px)"
                maxWidth="inherit"
                borderRadius="none"
                bgColor="bg.default/90"
                zIndex="nav"
                mt="3"
                onClick={() => setOpen(false)}
              >
                <Container>
                  <Flex flexDir="row" flexWrap="wrap" justify="space-evenly" mx="8" gap="8" pt="12">
                    {items.map((item, k) => (
                      <MegaItems {...item} key={k} />
                    ))}
                  </Flex>
                </Container>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </Portal>
        )}
      </Box>
    </HoverCard.Root>
  )
}

export const MegaItems = ({ title, icon, items, path, direction = 'row' }: NavItemProps) => {
  return (
    <Box w="30%">
      <LinkIfHref href={path}>
        <ItemHeading {...{ title, icon }} />
      </LinkIfHref>
      <Divider thickness="0.7em" my="4" color="accent.9" />

      <Flex gap="10" flexWrap="wrap" flexDir={direction} justify="start">
        {items?.map((item, k) =>
          item.items ? <MegaSubItems {...item} key={k} /> : <MegaItem {...item} key={k} />,
        )}
      </Flex>
    </Box>
  )
}

export const ItemHeading = ({ title, icon }: NavItemProps) => (
  <HStack>
    {icon}
    <Heading as="h4" size="5xl" fontFamily="mono">
      {title}
    </Heading>
  </HStack>
)

export const MegaSubItems = ({ icon, title, path, items }: NavItemProps) => {
  return (
    <Stack gap="0">
      <LinkIfHref href={path}>
        <MegaSubLabel {...{ title, icon, path }} />
      </LinkIfHref>
      {items?.map((item, k) => (
        <MegaItem {...item} key={k} />
      ))}
    </Stack>
  )
}

export const MegaSubLabel = ({ title, icon }: NavItemProps) => {
  return (
    <HStack gap="4">
      <Heading as="h5" fontSize="2xl" fontFamily="mono">
        {title}
      </Heading>
      {icon}
    </HStack>
  )
}

export const MegaItem = ({ title, path, icon, info }: NavItemProps) => {
  return (
    <LinkIfHref href={path}>
      <HStack gap="6">
        <MegaItemLabel {...{ title, path, icon }} />
        {info && (
          <Text as="span" color="fg.subtle" size="sm">
            {info}
          </Text>
        )}
      </HStack>
    </LinkIfHref>
  )
}

export const MegaItemLabel = ({ title, icon }: NavItemProps) => {
  return (
    <HStack gap="8">
      {icon}
      <Heading as="h6">{title}</Heading>
    </HStack>
  )
}
