import { defineTokens } from '@pandacss/dev'

import { animations } from './animations'
import { borders } from './borders'
import { colors } from './colors'
import { durations } from './durations'
import { easings } from './easings'
import { fontSizes } from './fontSizes'
import { gradients } from './gradients'
import { radii } from './radii'
import { shadows } from './shadows'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { zIndex } from './zIndex'

export const tokens = defineTokens({
  // assets,
  animations,
  borders,
  colors,
  durations,
  easings,
  // font
  fontSizes,
  // fontWeights,
  gradients,
  // letterSpacings,
  // lineHeights,
  // opacity,
  radii,
  shadows,
  sizes,
  spacing,
  zIndex,
})
