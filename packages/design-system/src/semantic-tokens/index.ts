import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    // Needed by typographyPreset
    olive: {
      200: { value: '{colors.gray.9}' },
      300: { value: '{colors.gray.8}' },
      500: { value: '{colors.gray.6}' },
      600: { value: '{colors.gray.5}' },
      700: { value: '{colors.gray.4}' },
      800: { value: '{colors.gray.3}' },
      900: { value: '{colors.gray.2}' },
    },
  },
})
