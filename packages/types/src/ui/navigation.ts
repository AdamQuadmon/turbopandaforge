import type { ButtonVariantProps } from '@turbopandaforge/styled-system/recipes'
import type { PropsWithChildren, ReactElement, ReactNode } from 'react'

export interface NavbarFullProps {
  navbarTop: NavbarTopProps
  navbarMain: NavbarProps
  navBottom?: ReactNode
}

export interface NavbarTopProps {
  left?: ReactNode
  center?: ReactNode
  right?: ReactNode
}

export interface NavbarProps {
  brand: ReactNode
  navPrimary: NavItemProps[]
  navSecondary: NavItemProps[]
  cta: ReactNode
}

export interface NavbarBottomProps {
  nav: ReactNode
}

export interface NavItemProps {
  title: string
  path?: string
  icon?: ReactElement
  info?: ReactElement
  description?: string
  label?: string
  size?: ButtonVariantProps['size']
  items?: NavItemProps[]
  direction?: 'column' | 'row'
}

export interface SidebarProps extends PropsWithChildren {
  pathname: string
  items: NavItemProps[]
}

export interface OffCanvasProps extends PropsWithChildren {
  title?: string
  description?: string
  bottomButtons?: ReactElement
}
