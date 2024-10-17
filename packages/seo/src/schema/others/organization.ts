import type { Options } from '@turbopandaforge/types/config/options'

import type { Organization } from 'schema-dts'

import { getSameAsFromContacts } from '../../lib/helpers'
import { getContactPointSchema } from './contact-point'

interface GetOrganizationSchemaParams {
  siteUrl: string
  options: Options
}

export const getOrganizationSchema = ({
  siteUrl,
  options,
}: GetOrganizationSchemaParams): Organization => {
  const { metadata, logo, contacts } = options
  const { name } = metadata
  const sameAs = getSameAsFromContacts(contacts)

  const jsonLd: Organization = {
    '@type': 'Organization',
    name,
    url: siteUrl,
    contactPoint: getContactPointSchema({ options }),
    ...(logo && { logo }),
    ...(sameAs.length && { sameAs }),
  }
  return jsonLd
}
