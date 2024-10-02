export const generateRobots = (basePath: string) => {
  return {
    rules: {
      allow: '/',
      disallow: '/admin',
      userAgent: '*',
    },
    sitemap: new URL(basePath, 'sitemap.xml').href,
  }
}
