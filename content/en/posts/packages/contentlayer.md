# ContentLayer

This package handles mdx content files from the file system.

It uses [Velite][velite] to do the job.

## Collections

### Options

Example of `data/options.yml`:

- name
- title
- description
- keywords
- author
- links
  - text
  - link
  - type
- socials
  - name
  - icon
  - link
  - image

### Base Page

- priority
- title
- cover
- description
- draft
- meta
- toc
- metadata
- excerpt
- content
- status
- code

#### Pages

`pages/**/*.mdx`

- slug

#### Posts

`posts/**/*.mdx`

- slug
- date
- updated
- featured
- category
- tags

### Categories

`categories/*.yml`:

- name
- slug
- cover
- description
- count

### Tags

`tags/index.yml`:

- name
- slug
- cover
- description
- count

## Tools

- [@sindresorhus/slugify][@sindresorhus/slugify]
- [rehype-autolink-headings][rehype-autolink-headings]
- [rehype-slug][rehype-slug]

[velite]: https://velite.js.org/
[@sindresorhus/slugify]: https://github.com/sindresorhus/slugify
[rehype-autolink-headings]: https://github.com/rehypejs/rehype-autolink-headings
[rehype-slug]: https://github.com/rehypejs/rehype-slug
