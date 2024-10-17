import type { NavItemProps } from '@turbopandaforge/types/ui/navigation'
import { shouldFilterStatus } from '@turbopandaforge/utils/content'

import { titleCase } from 'string-ts'

import { categories, options, pages, posts, tags } from '#content'
import type { Category, Options, Page, Post, Tag } from '#content'

export const getOptions = (): Options => {
  return options
}

/**
 * Create base metadata from slug
 */
export const createMetadata = (slug: string) => {
  const { locale } = options
  return {
    locale,
    title: titleCase(slug),
    permalink: `/${slug}`,
    slug,
    path: slug,
    excerpt: slug,
    lastMod: new Date().toISOString(),
    description: titleCase(slug),
  }
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
  return getTags().map(({ title, count, slug }) => ({
    title: `${title || titleCase(slug)} (${count.total})`,
    path: `/tag/${slug}`,
  }))
}

/**
 * Categories
 */

export const getCategories = (): Category[] => {
  return categories
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return getCategories().find((category) => category.slug === slug)
}

export const getCategoryLinks = (): NavItemProps[] => {
  return getCategories().map(({ count, path, slug, title }) => ({
    title: `${title || titleCase(slug)} (${count.total})`,
    path: `/${path}`,
  }))
}

/**
 * Pages
 */

export const getPages = (): Page[] => {
  return pages.filter((page) => shouldFilterStatus(page))
}

export const getPageBySlug = (slug: string): Page | undefined => {
  return getPages().find((page) => page.slug === slug)
}

/**
 * Pages and Categories
 */

export const getPagesAndCategories = (): (Page | Category)[] => {
  return [...getPages(), ...getCategories()]
}

export const getPageOrCategoryByPermalink = (permalink: string): Page | Category | undefined => {
  const page = getPages().find((page) => permalink === page.permalink)

  return page ? page : getCategories().find((category) => permalink === category.permalink)
}

/**
 * Posts
 */

export const getPosts = (): Post[] => {
  return posts.filter((post) => shouldFilterStatus(post))
}

export const getLatestPost = (): Post[] => {
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

export const getPostByCategories = (categories: string[]): Post | undefined => {
  return getPosts().filter((post) => categories.includes(post.category))
}

export const getPostByTag = (tag: string): Post | undefined => {
  return getPosts().filter((post) => post.tags?.includes(tag))
}
