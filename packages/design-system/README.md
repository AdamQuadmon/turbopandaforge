# Preset Panda

Inspired by
[preset-atlaskit](https://github.com/chakra-ui/panda/tree/main/packages/preset-atlaskit)
Contains
[Fluid Typography CSS](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
utility and styles

## Utils

- `makePrimaryColor(l: number)`
- `createFluidValue(minSize, maxSize, minScreenSize, maxScreenSize)`
- `getConfigFluidValue(minSize, maxSize)` default max/min screen sizes `360x1040`

## New Stuff

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
