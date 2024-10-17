import type { Author, BasePerson } from '@turbopandaforge/types/base'
import type { Options } from '@turbopandaforge/types/config/options'

import type { Person } from 'schema-dts'

interface GetWebSiteAuthorsSchemaParams {
  siteUrl: string
  options: Options
}

export const getWebSiteAuthorsSchema = ({
  siteUrl,
  options: {
    metadata: { authors },
  },
}: GetWebSiteAuthorsSchemaParams): Person[] => {
  return authors.map((author, k) => {
    const { name, url } = author
    return {
      '@id': `${siteUrl}/#author-${k}`,
      '@type': 'Person',
      name,
      url,
    }
  })
}

interface GetPostAuthorsSchemaParams {
  siteUrl: string
  authorPath: string
  author: Author
}

export const getPostAuthorSchema = ({
  siteUrl,
  authorPath,
  author,
}: GetPostAuthorsSchemaParams): Person => {
  const { name, slug } = author
  const personalUrl = `${siteUrl}/${authorPath}/${slug}/about/#${slug}`

  return {
    '@id': `${personalUrl}/#${slug}`,
    '@type': 'Person',
    name,
  }
}
