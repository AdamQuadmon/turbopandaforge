import type { AppConfig } from '@turbopandaforge/types/config/app'
import { CONFIG_NAME } from '@turbopandaforge/types/config/constants'
import { loadConfig } from 'c12'
import { consola } from 'consola'

import { resolveAppConfig } from '../resolvers/app'
import { defaultConfig } from './defaults'

export const getAppConfig = async (overrides?: Partial<AppConfig>): Promise<AppConfig> => {
  const { config } = await loadConfig<AppConfig>({
    name: CONFIG_NAME,
    packageJson: true,
    defaults: defaultConfig,
    overrides: {
      ...(overrides as AppConfig),
    },
  })

  const resolvedConfig = await resolveAppConfig(config)

  // TODO: validate config
  consola.success(
    'Loaded Config',
    //resolvedConfig
  )

  return resolvedConfig
}
