import type { BasePerson, Contacts, VerificationCodes } from '../base'

/**
 * This is for `options.yml` loaded by Velite in packages/contentlayer
 */
export interface Options {
  locale: string
  logo?: string
  metadata: OptionsMetadata
  navigation: Link[]
  highlights: Link[]
  footer: Link[]
  legals: Link[]
  contacts: Contacts
  verification: VerificationCodes
}

export interface Link {
  text: string
  link: string
}

/**
 * WebSite Metadata Schema
 *
 * These SEO fields are used in next.Js Metadata and JsonLd schema:
 *
 * `name`: WebSite name
 * `alternateName`: WebSite name in other languages.
 * `authors`: Individuals or entities that have created the site.
 * `creator`: Who created the site or application.
 * `description`: Brief description of the site.
 * `generator`: Software used to generate the site.
 * `imageAlt`: Alt text for open graph and twitter images.
 * `imageOg`: Open Graph image.
 * `imageTwitter`: Twitter image.
 * `keywords`: Keywords for SEO.
 * `locale`: Language and regional identifier.
 * `publisher`: Who publishes the site.
 * `title`: Main title of the site.
 * `titleTemplate`: Template for generating titles of sub pages.
 */
export interface OptionsMetadata {
  name: string
  alternateName?: string
  authors: BasePerson[]
  creator?: string
  description: string
  generator: string
  imageAlt?: string
  imageOg?: string
  imageTwitter?: string
  keywords: string[]
  publisher?: string
  title: string
  titleTemplate?: string
  twitterAccount?: string
}
