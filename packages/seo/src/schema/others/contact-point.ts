import type { Options } from '@turbopandaforge/types/config/options'

import type { ContactPoint } from 'schema-dts'

interface GetContactPointSchemaParams {
  options: Options
}

export const getContactPointSchema = ({
  options: {
    locale,
    contacts: { phone },
  },
}: GetContactPointSchemaParams): ContactPoint | undefined => {
  if (!phone) {
    return
  }

  return {
    '@type': 'ContactPoint',
    availableLanguage: locale,
    contactType: 'customer service',
    telephone: phone,
  }
}
