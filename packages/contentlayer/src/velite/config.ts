import { shouldFilterStatus } from '@turbopandaforge/utils/content'

import { shake } from 'radash'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import { kebabCase, startsWith, titleCase, toLowerCase } from 'string-ts'
import { type UserConfig, defineConfig } from 'velite'

import { categories } from './collections/categories'
import { metadata } from './collections/metadata'
import { options } from './collections/options'
import { pages, posts } from './collections/pages'
import { tags } from './collections/tags'
import { csvLoader } from './loaders/csv'

// https://velite.js.org/guide/velite-schemas
export const getConfig = (locale = 'en') =>
  defineConfig({
    root: `../../content/${locale}`,
    output: {
      data: '.velite',
      assets: 'public/static',
      base: '/static/',
      name: '[name]-[hash:6].[ext]',
      clean: true,
    },
    loaders: [csvLoader],
    collections: {
      categories,
      metadata,
      options,
      pages,
      posts,
      tags,
    },
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
      const { categories, metadata, pages, posts, tags } = collections

      type Metadata = (typeof metadata)[number]

      type PagesOrPostsType = 'pages' | 'posts'

      type Element = {
        path: string
        slug: string
      }

      // Helpers

      const getMissing = (available: string[], elements: Element[], type: 'path' | 'slug') =>
        Array.from(new Set(available)).filter(
          (_type) => elements.find((element) => element[type] === _type) == null,
        )

      const getChildren = (elements: Element[], element: Element) => {
        return elements
          .filter(
            (_element) => element.path !== _element.path && startsWith(_element.path, element.path),
          )
          .map((_element) => _element.path)
      }

      const getMetadataPaths = (type: PagesOrPostsType) =>
        metadata.filter((data) => type === data.type).map((data) => data.path) as string[]

      const getMeta = (type: string, path: string) =>
        (metadata.find((data) => type === data.type && path === data.path) as Metadata) || null

      const resolveMeta = (meta: Metadata, slug: string) => {
        const _meta = (meta ? shake(meta, (a) => !a) : {}) as Metadata

        //? set defaults
        if (!_meta.title) _meta.title = titleCase(slug)
        if (!_meta.locale) _meta.locale = locale

        //? remove unwanted params
        const { slug: _s, path: _p, type: _t, ...restMeta } = _meta

        return restMeta
      }

      // filter out drafts in production
      const filteredMetadata = metadata.filter((data) => shouldFilterStatus(data))

      // Pages and Posts

      const resolvePagesOrPostsMetadata = (
        element: (typeof pages | typeof posts)[number],
        type: PagesOrPostsType,
      ) => {
        const meta = getMeta(type, element.path)

        element.slug = toLowerCase(meta?.slug || element.slug || kebabCase(element.path))
        const { slug } = element

        Object.assign(element, resolveMeta(meta, slug))
        element.permalink = 'posts' === type ? `/blog/${slug}` : `/${'home' === slug ? '' : slug}`
      }

      pages.push(
        ...getMissing(getMetadataPaths('pages'), pages, 'path').map((path) => ({
          type: 'pages',
          status: 'published',
          path: path,
          slug: '',
          permalink: '',
          lastMod: new Date().toISOString(),
          code: '',
          content: '',
        })),
      )

      for (const page of pages) {
        resolvePagesOrPostsMetadata(page, 'pages')
      }

      for (const post of posts) {
        resolvePagesOrPostsMetadata(post, 'posts')
      }

      // Categories and Tags

      const filteredPosts = posts.filter((post) => shouldFilterStatus(post))

      const resolveCategoriesMetadata = (category: (typeof categories)[number]) => {
        const { path } = category
        const meta = getMeta('categories', path)

        category.slug = toLowerCase(meta?.slug || (path.split('/').pop() as string))

        Object.assign(category, resolveMeta(meta, category.slug))

        category.children = getChildren(categories, category)

        category.count.posts = filteredPosts.filter(
          (post) => path === post.category || startsWith(`${post.category}/`, path),
        ).length
        category.count.total = category.count.posts

        category.permalink = `/${path}`
      }

      const resolveTagsMetadata = (tag: (typeof tags)[number]) => {
        const meta = getMeta('tags', tag.path)

        if (meta) tag.slug = toLowerCase(meta.slug || meta.path)
        const { slug } = tag

        Object.assign(tag, resolveMeta(meta, slug))

        tag.count.posts = filteredPosts.filter((post) => post.tags?.includes(slug)).length
        tag.count.total = tag.count.posts

        tag.permalink = `/tag/${slug}`
      }

      // add missing

      categories.push(
        ...getMissing(
          filteredMetadata
            .filter((data) => !!data.category)
            .map((data) => data.category) as string[],
          categories,
          'path',
        ).map((path) => ({
          type: 'categories',
          status: 'published',
          path,
          slug: '',
          permalink: '',
          children: [],
          count: { total: 0, posts: 0 },
        })),
      )

      tags.push(
        ...getMissing(
          filteredMetadata
            .filter((data) => data.tags?.length)
            .flatMap((data) => data.tags) as string[],
          tags,
          'slug',
        ).map((slug) => ({
          type: 'tags',
          status: 'published',
          path: slug,
          slug,
          permalink: '',
          count: { total: 0, posts: 0 },
        })),
      )

      // resolve metadata

      for (const category of categories) {
        resolveCategoriesMetadata(category)
      }

      for (const tag of tags) {
        resolveTagsMetadata(tag)
      }
    },
  }) as UserConfig
