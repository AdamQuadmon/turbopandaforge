# Preset Panda

- Inspired by [preset-atlaskit][preset-atlaskit]
- contains [Fluid Typography CSS][Fluid Typography CSS] utility and styles
- [Panda Theme][panda-theme]
- [Park-UI Tokens][park-semantic]

## New Stuff

### Utils

- `makePrimaryColor(l: number)`
- `createFluidValue(minSize, maxSize, minScreenSize, maxScreenSize)`
- `getConfigFluidValue(minSize, maxSize)` default max/min screen sizes `360x1040`
- **globalCss**
  - *font optimizing*
  - *scrollPaddingTop* `5rem`
  - *scrollBehavior* `smooth`
  - *minHeight* `100%`
  - *flex* body
  - pre, blockquote, strong, code, article
  - article `--colors-prose` css variables
- **breakpoints**: `3xl` at `1800px`
- **keyframes**: `skeleton`
- **layerStyles**: `offShadow`, `section`

### Recipes

- **background**

### Slot Recipes

- **banner**
- **navbar**
- **footer**
- **layout**
- **progress** - override [Park-UI Progress][Park-UI Progress]

### Tokens

- **animations**
  - `shrink-out`
  - `skeleton`
  - `spin`
- **borders**
  - `danger`
  - `accent`
- **colors**
  - `current` - currentColor
  - `black`
  - `dark`
  - `white`
  - `socials`: 22 socials available
- **durations**
  - `fast`
  - `largeMs`
  - `mediumMs`
  - `smallMs`
- **easings**
  - `easeIn`
  - `easeInOut`
  - `easeOut`
- **fontSizes**
  - `fl1` to `fl8` fluid values
  - `base` *1rem*
- **gradients**:
  - `simple`
  - `inverted`
- **radii**
  - `card`
  - `pill`
  - `round`
- **shadows**
  - `focus`
  - `subtle`
  - `navbar`
  - `navbarInverted`
  - `realistic`
- **sizes**
  - `channel`
  - `desktop`
  - `screenH`
  - `screenW`
- **spacing**: fluid values
  - `fl2xl`
  - `fl2xs`
  - `fl3xl`
  - `fl3xs`
  - `fll`
  - `flm`
  - `fls`
  - `flxl`
  - `flxs`
- **zIndex**
  - `under`
  - `init`
  - `over`
  - `navUnder`
  - `nav`
  - `navOver`
  - `modal`
  - `nuclear`

### Semantic Tokens

- **colors**
  - `olive` - Needed by *typographyPreset*

[panda-theme]: https://panda-css.com/docs/customization/theme
[preset-atlaskit]: https://github.com/chakra-ui/panda/tree/main/packages/preset-atlaskit
[Fluid Typography CSS]: https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
[park-semantic]: https://park-ui.com/react/docs/theme/semantic-tokens
[Park-UI Progress]: https://github.com/cschroeter/park-ui/blob/main/packages/panda/src/theme/recipes/progress.ts
