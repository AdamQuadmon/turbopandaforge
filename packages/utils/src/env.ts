/**
 * Check `NODE_ENV`
 */
export const isProduction = process.env.NODE_ENV === 'production'

export const isProductionOrDebug = isProduction || process.env.DEBUG_VELITE === 'true'

/**
 * Retrieves the current environment the application is running in.
 */
export const getEnv = (): 'development' | 'preview' | 'production' => {
  const { NODE_ENV, VERCEL_ENV } = process.env

  if (NODE_ENV === 'development') return 'development'
  if (VERCEL_ENV === 'preview') return 'preview'
  return 'production'
}
