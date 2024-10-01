/**
 * Navigation: Navigation links for the site.
 *
 * `footer`: Links to be displayed in the footer.
 * `header`: Links to be displayed in the header.
 */
export interface NavigationConfig {
  sitemapPaths: string[]
  footer: NavigationLink[]
  header: NavigationLink[]
}

export interface NavigationLink {
  name: string
  url: string
}
