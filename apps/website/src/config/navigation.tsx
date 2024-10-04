import type {
  NavItemProps,
  NavbarFullProps,
  NavbarProps,
} from '@turbopandaforge/types/ui/navigation'
import { Badge } from '@turbopandaforge/ui/core/badge'
import { UserButtons } from '@turbopandaforge/ui/interaction/user-buttons'

import { BellPlus, Component, HeartHandshake, Rss, Shell, Tag } from 'lucide-react'
import type { Route } from 'next'

import { LocaleSwitcher } from '~/i18n/locale-switcher'
import { NavLink } from '~/i18n/nav-link'
import { getCategoryLinks, getLatestPostLinks, getTagLinks } from '~/lib/content'
import { Logo } from '~/logo'

const categories = getCategoryLinks()
const tags = getTagLinks()
const posts = getLatestPostLinks()

const categoriesItems: NavItemProps = {
  title: 'Categories',
  path: '/category',
  icon: <Component size={68} />,
  direction: 'row',
  items: categories,
}

const tagsItems: NavItemProps = {
  title: 'Tags',
  path: '/tag',
  direction: 'row',
  icon: <Tag size={68} />,
  items: tags,
}

const latestItems: NavItemProps = {
  title: 'Latest',
  direction: 'column',
  icon: <Rss size={68} />,
  items: posts,
}

export const navPrimary: NavItemProps[] = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/blog',
    items: [categoriesItems, tagsItems, latestItems],
  },
  {
    title: 'Docs',
    path: '/docs',
  },
]
export const navSecondary: NavItemProps[] = [
  {
    title: 'Follow',
    path: '/follow',
    icon: <BellPlus />,
  },
  {
    title: 'Join',
    path: '/join',
    icon: <Shell />,
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <HeartHandshake />,
  },
]

const navbarMain: NavbarProps = {
  brand: <Logo color="accent.9" w={{ base: '52' }} zIndex="navOver" />,
  navPrimary,
  navSecondary,
  cta: <UserButtons />,
}

export const navbar: NavbarFullProps = {
  navbarMain,
  navbarTop: {
    left: '@adam_quadmon',
    center: 'FOLLOW NOW!',
    right: <LocaleSwitcher />,
  },
  navBottom: categories.map(({ title, path }, k) => (
    <NavLink href={path as Route} key={k}>
      <Badge variant="subtle">{title}</Badge>
    </NavLink>
  )),
}
