import type { AppConfig } from '@turbopandaforge/types/config/app'

export const defaultConfig: AppConfig = {
  devUrl: 'http://localhost:3002',
  siteUrl: 'mugencraft.com',
  nextjs: {
    poweredByHeader: false,
    async headers() {
      return [
        {
          headers: [
            {
              key: 'Content-Type',
              value: 'application/rss+xml;charset=utf-8',
            },
          ],
          source: '/feed.xml',
        },
      ]
    },
  },
  securityHeaders: {
    permissionsPolicy: 'camera=(), microphone=(), geolocation=()',
    referrerPolicy: 'strict-origin-when-cross-origin',
    strictTransportSecurity: 'max-age=31536000; includeSubDomains',
    xContentTypeOptions: 'nosniff',
    xDnsPrefetchControl: 'attachment',
    //? Allow only if the app should run inside an iframe
    xFrameOptions: 'DENY',
    directives: {
      'default-src': ["'self'"],
      'worker-src': ["'self'", 'blob:'],
      'script-src': ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
      'style-src': ["'self'", "'unsafe-inline'"],
      'img-src': ['*', 'blob:', 'data:'],
      'object-src': ["'none'"],
      'base-uri': ["'none'"],
      'media-src': ["'self'"],
      'connect-src': ['*'],
      'font-src': ["'self'", 'data:'],
      'frame-src': ["'none'"],
    },
  },
  imageGenerator: {},
  navigation: {},
  ui: {},
  seo: {},
  siteMetadata: {},
}
