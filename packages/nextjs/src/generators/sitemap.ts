import type { BasePage } from '@turbopandaforge/types/content/pages'

/**
 * Generate Sitemap
 *
 * @param basePath Base website path, can be `https://myweb.com/`, `https://es.myweb.com/`, `https://www.myweb.com/es/`
 * @param routes Routes to add with current date as lastModified
 * @param pages Pages with date object
 * @returns
 */
export const generateSitemap = (basePath: string, routes: string[], pages: BasePage[]) => {
  const routesMap = ['', ...routes].map((route: string) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: new URL(basePath, route).href,
  }))

  const pagesMap = pages.map(({ date, lastMod, path }) => ({
    lastModified: lastMod || date,
    url: new URL(basePath, path).href,
  }))

  return [...pagesMap, ...routesMap]
}
