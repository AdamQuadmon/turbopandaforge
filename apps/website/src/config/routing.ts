export const port = process.env.PORT || 3002
export const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`

export const pathnames = ['blog', 'category', 'tag']
export const robotsDisallowed = ['api']

export type Pathnames = (typeof pathnames)[number]
