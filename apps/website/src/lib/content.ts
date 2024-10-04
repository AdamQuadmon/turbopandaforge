import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'
import { categories, pages, posts, tags } from '#content'
import type { Category, Page, Post, Tag } from '#content'

// TODO implement locale filtering if needed

/**
 * Category
 */

export const getCategories = (): Category[] | [] => {
  return categories
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return getCategories().find((category) => category.slug === slug)
}

export const getCategoryLinks = (): NavItemProps[] => {
  return getCategories().map(({ name, count, slug }) => ({
    title: `${name} (${count.total})`,
    path: `/category/${slug}`,
  }))
}

/**
 * Tags
 */

export const getTags = (): Tag[] | [] => {
  return tags
}

export const getTagBySlug = (slug: string): Tag | undefined => {
  return getTags().find((tag) => tag.slug === slug)
}

export const getTagLinks = (): NavItemProps[] => {
  return getTags().map(({ name, count, slug }) => ({
    title: `${name} (${count.total})`,
    path: `/tag/${slug}`,
  }))
}

/**
 * Pages
 */

export const getPages = (): Page[] | [] => {
  return pages
}

export const getPageBySlug = (slug: string): Page | undefined => {
  return getPages().find((page) => page.slug === slug)
}

/**
 * Posts
 */

// TODO: implement filters: draft
export const getPosts = (): Post[] | [] => {
  return posts
}

export const getLatestPost = (): Post[] | [] => {
  return getPosts().slice(-3) || []
}

export const getLatestPostLinks = (): Post[] | undefined => {
  return getLatestPost().map(({ title, slug }) => ({
    title,
    path: `/blog/${slug}`,
  }))
}

/**
 * Post
 */

export const getPostBySlug = (slug: string): Post | undefined => {
  return getPosts().find((post) => post.slug === slug)
}

export const getPostByCategory = (category: string): Post | undefined => {
  return getPosts().filter((post) => post.category === category)
}

export const getPostByTag = (tag: string): Post | undefined => {
  return getPosts().filter((post) => post.tags.includes(tag))
}
