# ContentLayer

This package handles mdx content files from the file system and query them on a SQLite database containing metadata of the files (frontmatter, file_path, url_path, etc)
it provides also seo and schema helpers to build content rich pages

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Providers](#providers)
  - [Next Config](#next-config)
    - [Next.js Provider generator](#nextjs-provider-generator)
  - [Metadata](#metadata)
  - [Markdown Db](#markdown-db)
  - [SQLite](#sqlite)
  - [SEO and Schema](#seo-and-schema)
    - [Open Graph](#open-graph)
    - [JsonLd Schemas](#jsonld-schemas)
- [Components](#components)
  - [MDX](#mdx)
  - [Page](#page)
- [Scripts](#scripts)
- [Libs](#libs)
  - [Rehype Plugins](#rehype-plugins)
- [Utils](#utils)
  - [Urls](#urls)

## Features

## Directory Structure

```plaintext
├── src/
│   ├── assets/
│   │   └── fonts/
│   ├── components/
│   │   └── mdx/
│   ├── types/
│   │   └── config.ts
│   └── index.ts
├── tests/
├── docs/
├── README.md
├── LICENSE.md
└── package.json
```

## Getting Started

## Usage

## API Reference

## Contribution Guidelines

We welcome contributions! Please see the CONTRIBUTING.md file for details on how to contribute to this project.

## License

This package is licensed under the MIT License - see the LICENSE.md file for details.

## Providers

### Next Config

- Next.js Config Plugins
  - Extend the nextjs.config with MDX features

#### Next.js Provider generator

a system to share config between the app and the package helpers

most of the helpers needs to know about app config to work properly

we wrote some facades to pass the config to the helpers

find a better way to handle configuration

### Metadata

- getSiteMetadata

  - siteMetadataDefaults
  - getComputedSiteMetadata
  - getNextMetadataBase
    - getAlternates
    - getLanguages
    - getTitle
    - getFormatDetection
    - getThemeColor
    - getVerification
    - getArchives
  - generateNextMetadataSite
    - getNextMetadataOpenGraph
    - getNextMetadataTwitterCard

- getPageMetadata
  - pageMetadataDefaults
  - getComputedPageMetadata
  - generateNextMetadataPage
  - getNextMetadataPageBase

### Markdown Db

we are using an external package that generates markdown.db with the frontmatter from the MDX files.

the client part is buggy, we are using a SQLite Cliente to get the data

we can try to fix the library or build our own

### SQLite

- openDb
- getAllPages: todo
- getPage: make it accept a basePath
- getPages
- getPageSlugs:

### SEO and Schema

#### Open Graph

#### JsonLd Schemas

- JsonLdScript
- getGraphSchema
- getOrganization
- getPotentialAction
- getWebPage
- getContactPoint
- getPerson
- getPersonRoute
- getOccupations
- getBlogPosting
- getBreadcrumb
- getBreadcrumbListElement
- getItemList
- getWebSiteSchema

## Components

### MDX

- mdxComponents: define a list of components to use in mdx

### Page

- Page
- PageContent
- PageCover
- PageDate
- Pages
- PagesRelated with getRelatedPages

## Scripts

- countTags
- createSearchIndex

## Libs

### Rehype Plugins

- generateToc
- prettyCode

## Utils

### Urls

- getDynamicRootPath
- getAppUrl
