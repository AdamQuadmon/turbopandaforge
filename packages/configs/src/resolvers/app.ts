import type { AppConfig } from '@turbopandaforge/types/config/app'
import type { NextConfig } from 'next'
import { resolveEnvBasedConfig } from './nextjs/env'
import { resolveNextHeaders } from './nextjs/headers'
import { resolveUserDefinedOptions } from './nextjs/user-defined'

export async function resolveAppConfig(appConfig: AppConfig): Promise<AppConfig> {
  const {
    nextjs: { headers, ...userNextjs },
    ...appConfigShared
  } = appConfig

  const nextjsWithHeaders: NextConfig = {
    ...resolveEnvBasedConfig(),
    ...(userNextjs.output !== 'export' && {
      headers: () => Promise.resolve(resolveNextHeaders(appConfig)),
    }),
    ...resolveUserDefinedOptions(userNextjs),
  }

  return {
    ...appConfigShared,
    nextjs: nextjsWithHeaders,
  }
}
