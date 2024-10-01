'use client'

import type { Assign, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'

import { type FooterVariantProps, footer } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from '@turbopandaforge/styled-system/types'

import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(footer)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'nav'>, PolymorphicProps>, FooterVariantProps>
>(ark.nav, 'root')

export const Header = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'header',
)
export const Left = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'left',
)
export const Center = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'center',
)
export const Right = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'right',
)
export const NavMain = withContext<
  HTMLDivElement,
  Assign<HTMLStyledProps<'nav'>, PolymorphicProps>
>(ark.nav, 'navMain')
