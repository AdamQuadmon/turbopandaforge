import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import turbopandaforgePreset from '@turbopandaforge/design-system'
import typographyPreset from 'pandacss-preset-typography'

// Example config from Ark-ui and Park-ui repos
export default defineConfig({
  jsxFramework: 'react',

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'src',

  presets: [
    '@pandacss/preset-base',
    // createPreset({ additionalColors: ['*'] }),
    createPreset({ grayColor: 'olive', accentColor: 'lime', borderRadius: 'sm' }),
    typographyPreset({
      recipe: {
        name: 'prose',
        semanticTokens: {
          defaults: {
            colorPalette: 'olive',
          },
        },
        // sizes: ['base'],
        // notProse: {
        //   className: 'not-prose',
        // },
      },
    }),
    turbopandaforgePreset,
  ],
})
