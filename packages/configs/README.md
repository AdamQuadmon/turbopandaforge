# Config-Package

This package encapsulates all configuration-related functionalities.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [App Config](#app-config)
- [Configuration](#configuration)
- [Usage](#usage)
- [Next.js Defaults](#nextjs-defaults)

## App Config

- devUrl: development url
- siteUrl: production url
- nextjs: Next.js custom config
- securityHeaders: Next.js Headers Security defaults
- imageGenerator: Next.Js Image Generation settings
- navigation: navigation links
- ui: UI settings
- seo: SEO settings
- siteMetadata: Site Metadata

## Configuration

Create a `forge.config.json` file in your app root

```json
{
  "devUrl": "http://localhost:3002",
  "siteUrl": "https://forge.mugencraft.com",
  "nextjs": {
    "transpilePackages": ["@turbopandaforge/ui", "@turbopandaforge/design-system"]
  },
  "navigation": {
    "sitemapPaths": ["about", "posts"]
  },
  "securityHeaders": {
    "directives": {
      "img-src": ["*", "blob:", "data:", ]
    }
  }
}
```

## Usage

Import the configuration provider and use it to access your configuration settings.

```javascript
import { getAppConfig } from '@turbopandaforge/configs/app'

const appConfig = await getAppConfig()

/** @type {import('next').NextConfig} */
const nextConfig = appConfig.nextjs

export default nextConfig
```

## Next.js Defaults

- Set options based on env: `dev`, `staging`, `production`
- Set sane defaults for **securityHeaders**, **ContentSecurityPolicy** and other headers
- Validate user config for best practices
