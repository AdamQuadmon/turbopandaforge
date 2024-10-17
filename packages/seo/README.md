# SEO-Package

This package provides SEO (Search Engine Optimization) related functionalities.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
  - [Generators](#generators)
  - [Next.Js Metadata](#nextjs-metadata)
  - [JsonLd Schemas](#jsonld-schemas)
    - [Website Schemas](#website-schemas)
    - [Page Schemas](#page-schemas)

## Features

- Next.Js robots.txt and sitemap.xml generators.
- Next.Js SEO Metadata helpers.
- JSON-LD Schema helpers and React Component.

### Generators

- `generateSitemap(siteUrl, routes, pages)` - Generate Next.Js Sitemap
- `generateRobots(siteUrl)` - Generate Next.Js robots.txt

### Next.Js Metadata

- `getWebSiteMetadata({ siteUrl, options })` - Generate Next.Js WebSite Metadata from OptionsMetadata in `options.yml`

### JsonLd Schemas

- `<JSON_LD jsonLd={schema} />` - React Component to render JsonLD Schemas
- `getGraphSchema(schema)` - Groups JsonLD schemas as `@graph` array

#### Website Schemas

- `getWebSiteSchema({ siteUrl, options, actions })`- Generate base WebSite Schema
- `getWebPageSchema({ siteUrl, page })`
- `getOrganizationSchema({ siteUrl, options })` - Generate `Organization` Schema
- `getPotentialActionSchema(actions)` - Generate `potentialActions` like `SearchAction` and `SubscribeAction`
- `getContactPointSchema({ options })` - Generate `ContactPoint` schemas
- `getWebSiteAuthorsSchema({ siteUrl, options })` - Generate `Person` schemas from WebSite `authors`

#### Page Schemas

- `getBreadcrumbSchema({ siteUrl, permalink, elements })` - Generate `BreadcrumbList`
- `getItemListSchema({ siteUrl, pages })` - Generate `ItemList` of `BlogPosting` for Posts lists
- `getBlogPostingSchema({ siteUrl, page })` - Generate `BlogPosting` schema for Post
- `getPostAuthorSchema({ siteUrl, authorPath, author })` - Generate `Person` schema for Post `author`
