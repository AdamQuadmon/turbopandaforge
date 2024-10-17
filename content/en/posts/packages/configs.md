# Config-Package

This package loads `forge.config.ts` leveraging [c12][c12] loading library.
It was loading all the application configuration but currently it only handles some **Next.Js** related settings and
some UI and SEO type definitions but these are not implemented and if needed can be also set as `options.yml`
see [Other Config Sources](#other-config-sources)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Other Config Sources](#other-config-sources)
- [App Config](#app-config)
- [Configuration](#configuration)
- [Usage](#usage)
- [Next.js Defaults](#nextjs-defaults)

## Other Config Sources

Some settings, such as `siteUrl` and `locale`, are defined as **ENV** var.

[Velite][velite] implementation available in **packages/contentlayer** offers
 `content/{locale}/data/options.yml` config file which provides **website**, **metadata** and **ui** settings.

[next-intl][next-intl] `messages/{locale}.json` can also be used as configuration source, especially language related ones.

## App Config

- nextjs: Next.js custom config
- securityHeaders: Next.js Headers Security defaults

## Configuration

Create a `forge.config.json` file in your app root

```json
{
  "nextjs": {
    "transpilePackages": [
      "@turbopandaforge/ui",
      "@turbopandaforge/design-system"
    ],
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

[c12]: https://github.com/unjs/c12
[velite]: https://velite.js.org/
[next-intl]: https://next-intl-docs.vercel.app/docs/getting-started
