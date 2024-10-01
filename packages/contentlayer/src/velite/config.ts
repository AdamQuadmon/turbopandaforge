import slugify from '@sindresorhus/slugify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { type UserConfig, defineConfig } from 'velite'

import { categories } from './collections/categories'
import { options } from './collections/options'
import { pages, posts } from './collections/pages'
import { tags } from './collections/tags'

// https://velite.js.org/guide/velite-schemas
export const config = defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { options, categories, tags, pages, posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
  prepare: (collections) => {
    const { categories, tags, posts: _posts } = collections
    // filter out drafts in production
    const posts = _posts.filter((post) => process.env.NODE_ENV !== 'production' || !post.draft)

    // add missing categories
    const missingCategories = Array.from(new Set(posts.map((post) => post.category))).filter(
      (categoryName) => categories.find((category) => category.name === categoryName) == null,
    )
    categories.push(
      ...missingCategories.map((name) => ({
        name,
        slug: slugify(name),
        permalink: '',
        count: { total: 0, posts: 0 },
      })),
    )

    // add counts and permalink to categories
    for (const category of categories) {
      category.count.posts = posts.filter((post) => post.category === category.name).length
      category.count.total = category.count.posts
      category.permalink = `/${category.slug}`
    }

    // add missing tags
    const missingTags = Array.from(new Set(posts.flatMap((post) => post.tags))).filter(
      (tagName) => tags.find((tag) => tag.name === tagName) == null,
    )
    tags.push(
      ...missingTags.map((name) => ({
        name,
        slug: slugify(name),
        permalink: '',
        count: { total: 0, posts: 0 },
      })),
    )

    // add counts and permalink to tags
    for (const tag of tags) {
      tag.count.posts = posts.filter((post) => post.tags.includes(tag.name)).length
      tag.count.total = tag.count.posts
      tag.permalink = `/${tag.slug}`
    }

    // return false // return false to prevent velite from writing data to disk
  },
}) as UserConfig
