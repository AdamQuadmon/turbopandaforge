import { defineTokens } from '@pandacss/dev'

export const zIndex = defineTokens.zIndex({
  under: { value: -1 },
  init: { value: 0 },
  over: { value: 1 },
  navUnder: { value: 500 },
  nav: { value: 666 },
  navOver: { value: 700 },
  modal: { value: 10000 },
  nuclear: { value: 9999 },
})
