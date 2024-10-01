'use client'

import type { Assign, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'

import { type NavbarVariantProps, navbar } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps, HTMLStyledProps } from '@turbopandaforge/styled-system/types'

import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(navbar)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  HTMLDivElement,
  Assign<Assign<HTMLStyledProps<'nav'>, PolymorphicProps>, NavbarVariantProps>
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

export const Top = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'top',
)

export const Bottom = withContext<HTMLDivElement, Assign<HTMLStyledProps<'div'>, PolymorphicProps>>(
  ark.div,
  'bottom',
)
