# TurboPandaForge Development Roadmap

## Milestone 1: Setup

### Iteration 1: Project Setup and Contributor Onboarding

#### Epic: Repository Setup

- [x] Create project repository
- [x] Add Initial Documentation
- [x] Add Contributor Guidelines
- [x] Document commit conventions
- [x] Document workflow

### Iteration 2: Development Environment Setup

#### Epic: Turbo & DevTools Setup

- [x] Implement initial project structure
- [x] Set up .gitignore
- [x] Set up workspaces
- [x] Set up Turbo
- [x] Document scripts in README

#### Epic: Linting and Formatting Setup

- [x] Implement Biome

#### Epic: Versioning, Change Log & Release Scripts

- [x] Changesets
- [x] Versioning

#### Epic: Continuous Integration Setup

- [x] Set up Vercel CI
- [x] Set up basic GitHub Actions
- [x] Git Commit Hooks with LeftHook
- [x] commitlint Setup

### Iteration 3: Next.js Setup

#### 🛠️ Epic: Core Setup

- [x] Set up Next.js with 14 appRouter
- [x] Configure base security settings
- [x] Directory Structure Setup (pages, components, public, styles, etc.)

#### 🎨 Epic: Styling and Theming

- [x] Setup PandaCSS for Modules/Styled-components
- [x] Configure Theme Provider
- [x] Implement basic styling and theming
- [x] Setup global styles

---

## Milestone 2: Data Handling

### Iteration 4: Config & Markdown

#### Epic: App Config

- [x] Config and Metadata App Settings
- [x] Static and dynamic URL handling
- [x] Setup API calls handling
- [x] Configure API routes if needed

#### Epic: Markdown & CSV Metadata

- [x] Implement Markdown for content
- [x] Frontmatter via CVS integration

---

## Milestone 3: Basic UI/UX & Pages

### Iteration 5: UI

#### Epic: UI Framework

- [x] Implement PandaCSS & ParkUI
- [x] Basic design, including dark/light mode
- [x] Create common components (e.g., Button, Input, Modal, etc.)

#### Epic: UI Components

- [x] Implement basic Layout components
- [x] Implement basic functionality of reading pages and posts

### Iteration 6: Advanced UI Components

#### Epic: Page Creation

- [x] OG image generation
- [x] MDX components
- [x] Page Card
- [x] Pages Cards

#### Epic: Web Pages

- [x] Page
  - [x] Article
  - [x] Tag
- [x] Collections
  - [x] Category

## Milestone 4: SEO & Internationalization

### Iteration 7: SEO & Internationalization

#### Epic: SEO

- [x] Implement SEO metadata
- [x] OpenGraph setup
- [x] JSON-LD integration

#### Epic: Internationalization

- [x] Set up internationalization (i18n) framework
  - [x] Select and integrate next-intl i18n library
  - [x] Configure languages and translations
  - [x] Implement language switcher UI

## Milestone X: Images

### Iteration X: Implement Images

#### Epic: Implement Images

- [ ] Add Image and Images Metadata to Velite Collections
- [ ] Add images counter for Categories and Tags
- [ ] Implement PageCover in PageContent

## Milestone X: Bug Fixing & Optimization

### Iteration X: Improve Internationalization

#### Epic: Complete Internationalization

- [ ] Implement go to other language in LocaleSwitcherSelect
- [ ] Implement page.alternateLanguages metadata to use in LocaleSwitcherSelect
- [ ] Generate page.alternateLanguages based on available content

### Iteration X: Improve Velite

#### Epic: Velite Page Advanced

- [ ] Improve createMetadata defaults and move to seo or contentLayer package
- [ ] Implement `pageType`: 'web' | 'category' | 'others'
- [ ] On `RestPage`: use pageType to render different components
- [ ] Implement `articleType`
- [ ] On `PostPage` and `PageContent`: use articleType to render different components
- [ ] Implement `images` and `mainEntity`

#### Epic: Velite Advanced

- [ ] Link Options, Page and other derived collections to Velite Zod Schemas

#### Epic: New Velite Collections

- [ ] Add Authors collection
- [ ] Implement authors in metadata

### Iteration X: Improve UX/UI

#### Epic: Improve Navbar

- [ ] On `NavbarFullProps` and other, be generic and only state the available slots, not their content
- [ ] Verify `NavLink` active status

#### Epic: Style and Documentation

- [ ] verify and document **design-system** `banner` recipe, it assumes there are .banner-hidden and .sidebar-container

#### Epic: Content Components

- [ ] Back to top button
- [ ] Social icons
- [ ] Reading time
- [ ] Pagination
- [ ] prev/next post links
- [ ] related/similar posts
- [ ] Image and Gallery
- [ ] MDX code highlighting

#### Epic: Other Web Pages

- [ ] Page
  - [ ] Image
- [ ] Collections
  - [ ] Gallery
- [ ] About
  - [ ] Projects
  - [ ] Socials
  - [ ] Timeline Feed
- [ ] Marketing
  - [ ] Newsletter issues
- [ ] Profit
  - [ ] Donate

#### Epic: Comments & Socials

- [ ] Commenting system (e.g., Disqus, Commento)
- [ ] Social sharing buttons
- [ ] Post like counter

### Iteration x: Improve SEO

#### Epic: Advanced SEO

- [ ] Implement Analytics
- [ ] Implement OpenGraph types
- [ ] Implement Schema WebPage and Article types
- [ ] Improve `getBlogPostingSchema` using page.articleType
- [ ] Improve `MetaImage` ui component
- [ ] Improve `FavIcon` ui component

#### Epic: Improve getContactPointSchema

- [ ] add options.availableLanguage to specify contact point languages
- [ ] implement other ContactPoints with no telephone

### Iteration X: Improve Internals

#### Epic: Improve Config Package

- [ ] Check if we still need config package
- [ ] Validate loaded config if still needed

### Iteration x: Performance & Accessibility

#### Epic: Performance

- [ ] Implement Server Side Rendering (SSR) or Static Site Generation (SSG) as needed
- [ ] Bundle analysis
- [ ] Aim for 100 Lighthouse score
- [ ] Configure Image Optimization (Next.js Image component or CDN)
- [ ] Lazy Loading implementation

#### Epic: Accessibility

- [ ] Conduct Lighthouse accessibility audits
