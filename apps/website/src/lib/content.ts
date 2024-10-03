import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'
import { categories, pages, posts, tags } from '#content'
import type { Category, Page, Post, Tag } from '#content'

export const getSidebarGroups = (): (Post[] | undefined)[] => {
  const categories = ['overview', 'guides', 'components', 'utilities']

  const sortedCategories = sortByCategories(posts, categories)

  return (
    categories
      // biome-ignore lint/suspicious/noPrototypeBuiltins: This line is safe as `categories` is predefined and not from external input
      .filter((category) => sortedCategories.hasOwnProperty(category))
      .map((category) => sortedCategories[category])
  )
}

export const sortByCategories = (posts: Post[], categories: string[]): Post | undefined => {
  return posts.reduce<Record<string, Post[]>>((acc, post) => {
    const category = post.category
    if (categories.includes(category)) {
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(post)
    }
    return acc
  }, {})
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug)
}

export const getCategoryLinks = (): NavItemProps[] => {
  return categories.map(({ name, count, slug }) => ({
    title: `${name} (${count.total})`,
    path: `/category/${slug}`,
  }))
}

export const getTagBySlug = (slug: string): Tag | undefined => {
  return tags.find((tag) => tag.slug === slug)
}

export const getTagLinks = (): NavItemProps[] => {
  return tags.map(({ name, count, slug }) => ({
    title: `${name} (${count.total})`,
    path: `/tag/${slug}`,
  }))
}

export const getLatestPost = (): Post[] | [] => {
  return posts.slice(-3) || []
}

export const getLatestPostLinks = (): Post[] | undefined => {
  return getLatestPost().map(({ title, slug }) => ({
    title,
    path: `/blog/${slug}`,
  }))
}

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug)
}

export const getPostByCategory = (category: string): Post | undefined => {
  return posts.filter((post) => post.category === category)
}

export const getPostByTag = (tag: string): Post | undefined => {
  return posts.filter((post) => post.tags.includes(tag))
}

export const getPageBySlug = (slug: string): Page | undefined => {
  return pages.find((page) => page.slug === slug)
}
