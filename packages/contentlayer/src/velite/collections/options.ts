import { defineCollection, s } from 'velite'

const links = s
  .array(
    s.object({
      text: s.string(),
      link: s.string(),
    }),
  )
  .default([])

const person = s.object({ name: s.string(), url: s.string().url() })

const metadata = s.object({
  name: s.string().max(40),
  alternateName: s.array(s.string().max(40)).optional(),
  description: s.string().max(999).optional(),
  keywords: s.array(s.string()),
  authors: s.array(person),
  creator: person.optional(),
  publisher: s.string().max(99).optional(),
  ogImage: s.string().max(150).optional(),
  title: s.string().max(99),
  titleTemplate: s.string().max(99),
})

/**
 * Contains WebSite base meta and App options like navigation link and ui settings
 */
export const options = defineCollection({
  name: 'Options',
  pattern: 'data/options.yml',
  single: true,
  schema: s.object({
    locale: s.string(),
    logo: s.string().optional(),
    metadata,
    navigation: links,
    highlights: links,
    footer: links,
    legals: links,
    contacts: s
      .object({
        email: s.string().optional(),
        facebook: s.string().optional(),
        github: s.string().optional(),
        instagram: s.string().optional(),
        linkedin: s.string().optional(),
        mastodon: s.string().optional(),
        twitter: s.string().optional(),
        wikipedia: s.string().optional(),
        youtube: s.string().optional(),
        phone: s.string().optional(),
      })
      .optional(),
    verification: s
      .object({
        google: s.string().optional(),
        yahoo: s.string().optional(),
        yandex: s.string().optional(),
        me: s.string().optional(),
      })
      .optional(),
  }),
})
