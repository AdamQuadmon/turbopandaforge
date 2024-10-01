import type { Contacts } from '../../base'

/**
 * SiteMetadata Schema for `content/metadata.json`
 *
 * Many of these fields are related to JsonLd schema for SEO optimization.
 *
 * `alternateName`: Alternative name for the site.
 * `applicationName`: Name of the web application.
 * `authors`: Individuals or entities that have created the site.
 * `availableLanguage`: Available languages for the site.
 * `contacts`: Contact details, typically for customer service.
 * `creator`: Who created the site or application.
 * `customerServiceTelephone`: Customer service phone number.
 * `description`: Brief description of the site.
 * `generator`: Software used to generate the site.
 * `headerTitle`: Title appearing in the site's header.
 * `images`: Featured images.
 * `keywords`: Keywords for SEO.
 * `language`: Primary language of the site, maps to 'inLanguage'.
 * `languages`: List of supported languages.
 * `locale`: Language and regional identifier.
 * `name`: Name of the entity/organization.
 * `paymentOptions`: Payment options accepted.
 * `privacyPolicy`: URL to the privacy policy.
 * `publisher`: Who publishes the site.
 * `sameAs`: Links to social media profiles.
 * `siteLogo`: Logo of the site.
 * `siteRepo`: Repository where the site's code is stored.
 * `sitemap`: URL to the sitemap.
 * `termsOfService`: URL to the terms of service.
 * `title`: Main title of the site.
 * `titleTemplate`: Template for generating titles of sub pages.
 */
export interface SiteMetadata {
  alternateName: string
  applicationName: string
  authors: string | string[]
  availableLanguage: string[]
  contacts: Contacts
  creator: string
  customerServiceTelephone?: string
  description: string
  generator: string
  headerTitle: string
  images: string[]
  keywords: string[]
  language: string
  languages: string[]
  locale: string
  name: string
  paymentOptions: string[]
  privacyPolicy?: string
  publisher?: string
  sameAs: string[]
  siteLogo: string
  siteRepo?: string
  sitemap: string
  termsOfService?: string
  title: string
  titleTemplate: string
}

// TODO: implement and resolve to SiteMetadata
export type SiteMetadataConfig = {}
