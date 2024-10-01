import { getEnv } from '@turbopandaforge/utils/env'

/**
 * Configuration based on ENV and DEBUG flag.
 *
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/compress
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/productionBrowserSourceMaps
 * @see https://nextjs.org/docs/architecture/nextjs-compiler#remove-console
 */
export const resolveEnvBasedConfig = (): EnvBasedConfig => {
  const env = getEnv()
  const isDev = env === 'development'
  const { DEBUG } = process.env
  const onDevOrDebug = isDev || !!DEBUG
  const onProductionOrNotDebug = !isDev || !DEBUG

  return {
    compress: onProductionOrNotDebug,
    productionBrowserSourceMaps: onDevOrDebug,
    compiler: {
      //! Not Working with --turbo
      // removeConsole: onProduction,
    },
  }
}

interface EnvBasedConfig {
  /** Indicates whether compression is enabled. */
  compress: boolean

  /** Indicates whether source maps should be enabled in production. */
  productionBrowserSourceMaps: boolean

  compiler: {
    /** Remove console from compiled output */
    removeConsole?: boolean
  }
}
