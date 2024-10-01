import { defineTokens } from '@pandacss/dev'

export const shadows = defineTokens.shadows({
  focus: { value: '0 0 0 3px {colors.accent.6}' },
  // string value
  subtle: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
  navbar: { value: '0 2px 4px rgba(0,0,0,.02),0 1px 0 rgba(0,0,0,.06)' },
  navbarInverted: { value: '0 -1px 0 rgba(255,255,255,.1) inset' },
  // multiple string values
  realistic: {
    value: ['0 1px 2px 0 rgba(0, 0, 0, 0.05)', '0 1px 4px 0 rgba(0, 0, 0, 0.1)'],
  },
})
