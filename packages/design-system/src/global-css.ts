import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  html: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: '100%',
    textRendering: 'optimizeLegibility',
    scrollPaddingTop: '5rem',
    scrollBehavior: 'smooth',
    minHeight: '100%',
  },
  'html, body': {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    fontFamily: 'body',
  },
  pre: {
    background: 'transparent!',
    overflowX: 'auto',
    fontSize: '13px !important',
  },
  blockquote: {
    fontStyle: 'normal!',
    fontWeight: 'normal!',
  },
  strong: {
    color: 'colors.fg.default!',
  },
  code: {
    fontFamily: 'code',
    '::selection': {
      bg: 'colors.gray.4',
    },
  },
  article: {
    '--colors-prose-body': 'colors.fg.muted',
    '--colors-prose-heading': 'colors.fg.default',
    '--colors-prose-bold': 'colors.fg.default',
    '--colors-prose-link': 'colors.fg.default',
    '--colors-prose-code': 'colors.fg.default',
    '--colors-prose-td-border': 'colors.border.subtle',
    '--colors-prose-th-border': 'colors.border.subtle',
    '--colors-prose-hr-border': 'colors.border.subtle',
    '--colors-prose-quote-border': 'colors.accent.default',
  },
})
