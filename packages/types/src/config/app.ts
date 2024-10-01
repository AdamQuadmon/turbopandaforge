import type { NextConfig } from 'next'
import type { SecuritySettingsConfig } from './app/headers'
import type { ImageGeneratorConfig } from './app/image-generator'
import type { NavigationConfig } from './app/navigation'
import type { SeoConfig } from './app/seo'
import type { SiteMetadataConfig } from './app/site-metadata'
import type { UiConfig } from './app/ui'

/**
 * Configuration settings for the application.
 */
export interface AppConfig {
  devUrl: string
  siteUrl: string
  nextjs: NextConfig
  securityHeaders: SecuritySettingsConfig
  imageGenerator: ImageGeneratorConfig | {}
  siteMetadata: SiteMetadataConfig | {}
  navigation: NavigationConfig | {}
  ui: UiConfig | {}
  seo: SeoConfig | {}
}
