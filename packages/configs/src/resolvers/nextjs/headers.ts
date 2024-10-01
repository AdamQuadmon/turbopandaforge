import type { AppConfig } from '@turbopandaforge/types/config/app'
import type {
  DirectivesConfig,
  SecuritySettingsConfig,
} from '@turbopandaforge/types/config/app/headers'
import type { Header } from 'next/dist/lib/load-custom-routes'

/**
 * Merge user provided `headers` with Security default Headers defined in `securitySettings`
 **/
export const resolveNextHeaders = async (appConfig: AppConfig): Promise<Header[]> => {
  const {
    nextjs: { headers },
    securityHeaders,
  } = appConfig

  const userHeaders = (await headers?.()) ?? []
  const _securityHeaders = getSecurityHeaders(securityHeaders)

  return [...userHeaders, ..._securityHeaders]
}

const getSecurityHeaders = (securitySettings: SecuritySettingsConfig): Header[] => {
  const {
    directives,
    referrerPolicy,
    xFrameOptions,
    xContentTypeOptions,
    xDnsPrefetchControl,
    strictTransportSecurity,
    permissionsPolicy,
  } = securitySettings

  const contentSecurityPolicy = buildContentSecurityPolicy(directives)

  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: contentSecurityPolicy,
        },
        {
          key: 'Permissions-Policy',
          value: permissionsPolicy,
        },
        {
          key: 'Referrer-Policy',
          value: referrerPolicy,
        },
        {
          key: 'X-Frame-Options',
          value: xFrameOptions,
        },
        {
          key: 'X-Content-Type-Options',
          value: xContentTypeOptions,
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: xDnsPrefetchControl,
        },
        {
          key: 'Strict-Transport-Security',
          value: strictTransportSecurity,
        },
      ],
    },
  ]
}

/**
 * Convert the directive object to a CSP string
 */
function buildContentSecurityPolicy(directives: DirectivesConfig): string {
  //
  const ContentSecurityPolicy = Object.entries(directives)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')};`)
    .join(' ')
    .replace(/\n/g, '')

  return ContentSecurityPolicy
}
