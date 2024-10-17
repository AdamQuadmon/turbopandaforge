export const generateRobots = (siteUrl: string, disallow: string[] = []) => {
  return {
    rules: {
      allow: '/',
      disallow: disallow,
      userAgent: '*',
    },
    sitemap: new URL(siteUrl, 'sitemap.xml').href,
  }
}
