import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import turbopandaforgePreset from '@turbopandaforge/design-system'
import { progress } from '@turbopandaforge/styled-system/recipes'
import typographyPreset from 'pandacss-preset-typography'

export default defineConfig({
  jsxFramework: 'react',
  preflight: true,
  include: [
    '../../packages/ui/src/**/*.{ts,tsx,js,jsx}',
    '../../packages/design-system/src/**/*.ts',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  importMap: '@turbopandaforge/styled-system',
  outdir: 'styled-system',
  presets: [
    createPreset({ grayColor: 'sand', accentColor: 'orange', borderRadius: 'sm' }),
    typographyPreset({
      recipe: {
        name: 'prose',
        semanticTokens: {
          defaults: {
            colorPalette: 'sand',
          },
        },
      },
    }),
    turbopandaforgePreset,
  ],
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: 'var(--font-body), sans-serif' },
          code: { value: 'var(--font-code), monospace' },
        },
      },
      semanticTokens: {
        colors: {
          // Needed by typographyPreset
          sand: {
            200: { value: '{colors.gray.9}' },
            300: { value: '{colors.gray.8}' },
            500: { value: '{colors.gray.6}' },
            600: { value: '{colors.gray.5}' },
            700: { value: '{colors.gray.4}' },
            800: { value: '{colors.gray.3}' },
            900: { value: '{colors.gray.2}' },
          },
        },
      },
    },
  },
  staticCss: {
    recipes: {
      progress: [{ visual: ['*'] }],
    },
    css: [
      {
        properties: {
          // backgroundColor: ['*'],
          // borderColor: ['*'],
          // borderLeftColor: ['bg.emphasized'],
          // borderBottomColor: ['bg.emphasized'],
          // borderWidth: ['4px'],
          // boxShadow: ['*'],
          // color: ['*'],
          // colorPalette: ['red'],
          // fontWeight: ['*'],
          textStyle: ['*'],
        },
      },
    ],
  },
})
