import type {
  NavItemProps,
  NavbarFullProps,
  NavbarProps,
} from '@turbopandaforge/types/ui/navigation'
import { Badge } from '@turbopandaforge/ui/core/badge'
import { UserButtons } from '@turbopandaforge/ui/interaction/user-buttons'

import { BellPlus, Component, HeartHandshake, Rss, Shell, Tag } from 'lucide-react'
import type { Route } from 'next'

import { Logo } from '~/components/logo'
import { LocaleSwitcher } from '~/i18n/locale-switcher'
import { NavLink } from '~/i18n/nav-link'
import { getCategoryLinks, getLatestPostLinks, getTagLinks } from '~/lib/content'

const categoryLinks = getCategoryLinks()
const tagLinks = getTagLinks()
const postLinks = getLatestPostLinks()

const categoriesItems: NavItemProps = {
  title: 'Categories',
  path: '/category',
  icon: <Component size={68} />,
  direction: 'row',
  items: categoryLinks,
}

const tagsItems: NavItemProps = {
  title: 'Tags',
  path: '/tag',
  direction: 'row',
  icon: <Tag size={68} />,
  items: tagLinks,
}

const latestItems: NavItemProps = {
  title: 'Latest',
  direction: 'column',
  icon: <Rss size={68} />,
  items: postLinks,
}

export const navPrimary: NavItemProps[] = [
  {
    title: 'About',
    path: '/about-us',
  },
  {
    title: 'Blog',
    path: '/blog',
    items: [categoriesItems, tagsItems, latestItems],
  },
  {
    title: 'Roadmap',
    path: '/blog/roadmap',
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
  navBottom: categoryLinks.map(({ title, path }, k) => (
    <NavLink href={path as Route} key={k}>
      <Badge variant="subtle">{title}</Badge>
    </NavLink>
  )),
}
