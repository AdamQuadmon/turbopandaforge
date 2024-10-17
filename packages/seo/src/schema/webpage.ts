import type { Page } from '@turbopandaforge/types/content/pages'

import type { WebPage } from 'schema-dts'

interface GetWebPageSchemaParams {
  siteUrl: string
  page: Page
}

export const getWebPageSchema = ({ siteUrl, page }: GetWebPageSchemaParams): WebPage => {
  const { permalink, description, mainEntity, pageType, locale, title } = page
  const pageUrl = `${siteUrl}${permalink}`
  const type = (pageType || 'WebPage') as WebPage['@type']

  return {
    '@id': `${pageUrl}/#${type}`,
    '@type': type,
    ...(description && { description }),
    inLanguage: locale,
    isPartOf: { '@id': `${siteUrl}/#site` },
    ...(mainEntity && { mainEntity: { '@id': mainEntity } }),
    name: title,
    url: pageUrl,
  }
}
