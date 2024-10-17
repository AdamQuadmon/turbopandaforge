# Apps/Docs

A [Next.js](https://nextjs.org/) blog project with SEO and Analytics featuring
[velite][velite] for **data handling** and
[PandaCSS🐼](https://panda-css.com/) for the UI.

## Features

- [Million][million]
- [Bundle Analyzer][Bundle Analyzer]

### Translations and i18n

[next-intl][next-intl] is implemented [without-i18n-routing][without-i18n-routing].
We leverage a `LOCALE` env variable to set the locale to load.
This way we can build different languages to different domains.

## Steps to config

- Create a `.env` file similar to [`.env.example`](.env.example).
- configure style in `panda.config.ts`
- configure app in `forge.config.json`
- run:

```sh
bun dev
```

## Tools

- [next-themes]
- [vercel/analytics][vercel/analytics]
- [react-simple-icons](https://simpleicons.org/)
- [lucide-react](https://lucide.dev/)

[million]: https://million.dev/
[Bundle Analyzer]: https://nextjs.org/docs/app/building-your-application/optimizing/package-bundling
[next-themes]: https://github.com/pacocoursey/next-themes
[vercel/analytics]: https://vercel.com/analytics
[velite]: https://velite.js.org/
[next-intl]: https://next-intl-docs.vercel.app/docs/getting-started
[without-i18n-routing]: https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
