import { defineTokens } from '@pandacss/dev'

import { socials } from './colors/socials'

export const colors = defineTokens.colors({
  black: { value: '#000' },
  current: { value: 'currentColor' },
  dark: { value: '#111' },
  socials,
  white: { value: '#fff' },
})
