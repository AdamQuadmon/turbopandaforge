import type { Preset } from '@pandacss/types'

import { definePreset } from '@pandacss/dev'

import { breakpoints } from './config/breakpoints'
import { keyframes } from './config/keyframes'
import { layerStyles } from './config/layer-styles'
import { globalCss } from './global-css'
import { patterns } from './patterns'
import { recipes, slotRecipes } from './recipes'
import { semanticTokens } from './semantic-tokens'
import { tokens } from './tokens'

const preset: Preset = definePreset({
  name: 'turbopandaforge',
  globalCss,
  theme: {
    extend: {
      breakpoints,
      keyframes,
      layerStyles,
      recipes,
      semanticTokens,
      slotRecipes,
      tokens,
    },
  },
  patterns,
})

export default preset
