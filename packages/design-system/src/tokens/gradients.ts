import { defineTokens } from '@pandacss/dev'

export const gradients = defineTokens.gradients({
  simple: {
    value: {
      placement: 'to left',
      stops: ['blue', 'red'],
      type: 'linear',
    },
  },
  inverted: {
    value: {
      placement: 'to right',
      stops: ['blue', 'red'],
      type: 'linear',
    },
  },
})
