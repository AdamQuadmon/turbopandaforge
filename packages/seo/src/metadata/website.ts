import type { BasePerson } from '@turbopandaforge/types/base'
import type { Options } from '@turbopandaforge/types/config/options'

import type { Metadata } from 'next'

import { getMetaImage } from './meta-image'

/**
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
interface GetWebSiteMetadataParams {
  options: Options
  siteUrl: string
}

export const getWebSiteMetadata = ({ options, siteUrl }: GetWebSiteMetadataParams): Metadata => {
  const { metadata, locale } = options
  const {
    name,
    authors,
    creator,
    description,
    imageAlt,
    imageOg,
    imageTwitter,
    keywords,
    publisher,
    title,
    titleTemplate,
    twitterAccount,
  } = metadata
  const author = authors[0] as BasePerson
  const alt = imageAlt || title

  return {
    applicationName: name,
    authors,
    creator: creator || author.name,
    description: description,
    generator: 'turbopandaforge',
    keywords,
    metadataBase: new URL(siteUrl),
    publisher: publisher || author.name,
    title: {
      template: titleTemplate || `%s | ${title}`,
      default: title,
    },
    openGraph: {
      description,
      locale,
      ...(name && { siteName: name }),
      title,
      type: 'website',
      url: siteUrl,

      ...(imageOg && { images: getMetaImage(imageOg, alt, 'og') }),
    },
    ...(twitterAccount && {
      twitter: {
        card: 'summary_large_image',
        site: `@${twitterAccount}`,
        creator: `@${twitterAccount}`,
        description,
        title,
        ...(imageTwitter && { images: getMetaImage(imageTwitter, alt, 'twitter') }),
      },
    }),
  }
}
