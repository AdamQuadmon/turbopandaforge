/**
 * SeoConfig: Configuration for SEO-related settings
 *
 * - imageGenerator: Configuration for generating Open Graph images
 * - rssFeed: URL for the RSS feed
 * - siteUrl: Root URL for the site
 * - sitemapPaths: List of paths to include in the sitemap
 * - socialMediaLinks: List of social media links associated with the site
 * - twitterCard: URL or config for the Twitter Card image
 */
export interface SeoConfig {
  rssFeed: string
  siteUrl: string
  sitemapPaths: string[]
  socialMediaLinks: string[]
  twitterCard: string
}
