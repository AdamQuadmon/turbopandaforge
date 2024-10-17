import type { BreadcrumbList, ListItem, WithContext } from 'schema-dts'

interface BreadcrumbListItem {
  name: string
  position: number
  permalink?: string
}

interface GetBreadcrumbSchemaParams {
  siteUrl: string
  permalink?: string
  crumbs: BreadcrumbListItem[]
}
interface GetBreadcrumbListElementSchemaParams {
  siteUrl: string
  pageUrl?: string
  crumbs: BreadcrumbListItem[]
}

export const getBreadcrumbSchema = ({
  siteUrl,
  permalink,
  crumbs,
}: GetBreadcrumbSchemaParams): WithContext<BreadcrumbList> => {
  const pageUrl = permalink ? `${siteUrl}${permalink}` : siteUrl

  const jsonLd: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@id': `${pageUrl}/#breadcrumb`,
    '@type': 'BreadcrumbList',
    itemListElement: getBreadcrumbListElementSchema({ siteUrl, pageUrl, crumbs }),
    itemListOrder: 'ItemListOrderAscending',
    numberOfItems: crumbs.length,
  }

  return jsonLd
}

const getBreadcrumbListElementSchema = ({
  siteUrl,
  pageUrl,
  crumbs,
}: GetBreadcrumbListElementSchemaParams): ListItem[] =>
  // item without permalink is assumed to be current page
  crumbs.map(({ name, position, permalink }) => {
    const url = permalink ? `${siteUrl}${permalink}` : pageUrl
    const listItem: ListItem = {
      '@type': 'ListItem',
      item: {
        '@id': `${pageUrl}/#breadcrumb-item-${position}`,
        name,
        url,
      },
      position,
    }

    return listItem
  })
