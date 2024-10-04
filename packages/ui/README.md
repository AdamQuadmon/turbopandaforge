# Panda UI

[Park-UI][Park-UI] based User Interface built with [Ark-UI][Ark-UI] and [PandaCSS][PandaCSS].

See [Park-UI repo][Park-UI-components] for more components.

## Tools

- [@ark-ui/react](https://ark-ui.com/)
- [@icons-pack/react-simple-icons](https://simpleicons.org/)
- [@shikijs/transformers][shiki]
- [@theme-toggles/react][@theme-toggles/react]
- [@uidotdev/usehooks][usehooks]
- [lucide-react](https://lucide.dev/)
- [react-hook-form](https://www.react-hook-form.com/)
- [ts-pattern](https://github.com/gvergnaud/ts-pattern)
- [usehooks-ts][usehooks-ts]

## Components

### Core

- All the available [Park-UI components][Park-UI-components-doc]
- Extra components from Ark-UI
  - [Code][Code]
  - [Heading][Heading]
  - [Kdb][Kdb]
  - [Link][Link]
  - [Pre][Pre]
  - [Prose][Prose]
  - [Text][Text]
- Other styled components
  - Navbar: with slot recipe, see **@turbopandaforge/design-system**
  - Footer: with slot recipe, see **@turbopandaforge/design-system**

### Interaction

- From Ark-UI
  - [CopyToClipboardButton][copy]
  - [ColorModeButton][color-mode]
  - [SignInButton][SignInButton]
  - [SignOutButton][SignOutButton] - Server Action
- Other components
  - SignUpButton
  - UserButtons
  - SearchForm
  - LocaleSelect

### Navigation

- NavbarFull
  - Navbar
  - NavbarTop
  - NavbarBottom
- NavItem
  - NavItemTitle
  - NavItemMega
  - NavItemMenu
- OffCanvas
- Sidebar
- Breadcrumbs

### Page

- From Ark-UI
  - [CodePreview][CodePreview]
  - [TableOfContent][table-of-content]
- PageCard
- PageCards
- PageContent
- PageDate
- PageRelated
- Article
- ProgressBar

### Hooks

- `useScrollDirection` - [Gorzelinski scroll directions][gorzelinski-dir]
- `useScrollProgress` - [Gorzelinski scroll progress][gorzelinski-progress]

### Lib

- `getNextHeading` - return the next heading
- `getNextSize` - return the next size

<!-- MARKDOWN LINKS & IMAGES -->
[Park-UI]: https://park-ui.com/
[Ark-UI]: https://ark-ui.com/
[PandaCSS]: https://panda-css.com/
[Park-UI-components]: https://github.com/cschroeter/park-ui/tree/main/website/src/components
[Park-UI-components-doc]: https://park-ui.com/react/docs/components/accordion
[@theme-toggles/react]: https://github.com/AlfieJones/theme-toggles
[usehooks-ts]: https://usehooks-ts.com/
[usehooks]: https://github.com/uidotdev/usehooks
[shiki]: https://shiki.style/packages/transformers

[Code]: https://github.com/chakra-ui/ark/blob/main/website/src/components/ui/code.tsx
[Heading]: https://github.com/chakra-ui/ark/blob/main/website/src/components/ui/heading.tsx
[Kdb]: https://github.com/chakra-ui/ark/blob/main/website/src/components/ui/kbd.tsx
[Link]: https://github.com/chakra-ui/ark/blob/main/website/src/components/ui/link.tsx
[Pre]: https://github.com/chakra-ui/ark/blob/main/website/src/components/pre.tsx
[Prose]: https://github.com/chakra-ui/ark/blob/main/website/src/components/ui/prose.tsx
[Text]: https://github.com/chakra-ui/ark/blob/main/website/src/components/ui/text.tsx
[copy]: https://github.com/chakra-ui/ark/blob/main/website/src/components/copy-to-clipboard-button.tsx
[color-mode]: https://github.com/chakra-ui/ark/blob/main/website/src/components/color-mode-button.tsx
[SignInButton]: https://github.com/chakra-ui/ark/blob/main/website/src/components/auth/sign-in-button.tsx
[SignOutButton]: https://github.com/chakra-ui/ark/blob/main/website/src/components/auth/sign-out-button.tsx
[CodePreview]: https://github.com/chakra-ui/ark/blob/main/website/src/components/code-preview.tsx
[table-of-content]: https://github.com/chakra-ui/ark/blob/main/website/src/components/table-of-content.tsx
[gorzelinski-dir]: https://github.com/gorzelinski/gorzelinski.com/blob/main/hooks/use-scroll-direction.tsx
[gorzelinski-progress]: https://github.com/gorzelinski/gorzelinski.com/blob/main/hooks/use-scroll-progress.tsx
