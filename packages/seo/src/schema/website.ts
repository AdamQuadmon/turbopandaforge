import type { Options } from '@turbopandaforge/types/config/options'
import type { ActionsConfig } from '@turbopandaforge/types/seo/actions'

import type { WebSite, WithContext } from 'schema-dts'

import { getSameAsFromContacts } from '../lib/helpers'
import { getPotentialActionSchema } from './actions/actions'
import { getWebSiteAuthorsSchema } from './others/person'

interface GetWebSiteSchemaParams {
  siteUrl: string
  options: Options
  actions?: ActionsConfig
}

/**
 * Return WebSite Graph
 */
export const getWebSiteSchema = ({
  siteUrl,
  options,
  actions,
}: GetWebSiteSchemaParams): WithContext<WebSite> => {
  const { contacts, metadata, locale } = options
  const { name, description, alternateName, imageOg } = metadata
  const potentialAction = actions && getPotentialActionSchema(actions)
  const sameAs = getSameAsFromContacts(contacts)

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name,
    description,
    inLanguage: locale,
    author: getWebSiteAuthorsSchema({ siteUrl, options }),
    ...(alternateName && { alternateName }),
    ...(sameAs.length && { sameAs }),
    ...(imageOg && { image: imageOg }),
    ...(potentialAction && { potentialAction }),
  }
}
