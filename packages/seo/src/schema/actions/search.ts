import type { SearchConfig } from '@turbopandaforge/types/seo/actions'

import type { SearchAction } from 'schema-dts'

export const getSearchAction = ({ targetUrl }: SearchConfig): SearchAction => {
  const jsonLd: SearchAction = {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${targetUrl}{search_term_string}`,
    },
    query: 'required name=search_term_string',
  }

  return jsonLd
}
