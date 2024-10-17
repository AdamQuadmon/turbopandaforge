import type { NextConfig } from 'next'
import type { SecuritySettingsConfig } from './nextjs/headers'
import type { ImageGeneratorConfig } from './nextjs/image-generator'

/**
 * Configuration settings for the Next.Js application.
 */
export interface AppConfig {
  nextjs: NextConfig
  securityHeaders: SecuritySettingsConfig
  imageGenerator: ImageGeneratorConfig | {}
}
