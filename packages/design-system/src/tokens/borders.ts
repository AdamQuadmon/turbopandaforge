import { defineTokens } from '@pandacss/dev'

export const borders = defineTokens.borders({
  accent: { value: { color: 'accent.5', style: 'solid', width: '1px' } },
  danger: { value: { color: 'red.5', style: 'solid', width: '1px' } },
})
