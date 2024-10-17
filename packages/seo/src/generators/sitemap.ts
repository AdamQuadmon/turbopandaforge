import type { Page } from '@turbopandaforge/types/content/pages'

/**
 * Generate Sitemap
 *
 * @param siteUrl Base website path, can be `https://myweb.com/`, `https://es.myweb.com/`, `https://www.myweb.com/es/`
 * @param pages Pages with date object
 * @param routes Routes to add with current date as lastModified
 *
 *
 * TODO: implement alternates for both pages and routes
 */
export const generateSitemap = (siteUrl: string, pages: Page[], routes: string[] = []) => {
  const filteredRoutes = getFilteredRoutes(pages, routes)
  const routesMap = ['', ...filteredRoutes].map((route: string) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: new URL(siteUrl, route).href,
  }))

  const pagesMap = pages.map(({ date, lastMod, permalink }) => ({
    lastModified: lastMod || date,
    url: new URL(siteUrl, permalink).href,
  }))

  return [...pagesMap, ...routesMap]
}

const getFilteredRoutes = (pages: Page[], routes: string[] = []) => {
  const permalinks = pages.map(({ permalink }) => permalink)
  return routes.filter((route) => !permalinks.includes(route))
}
