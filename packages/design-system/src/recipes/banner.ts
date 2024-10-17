import { defineSlotRecipe } from '@pandacss/dev'

const slots = ['root', 'content', 'closeButton', 'closeIcon']

export const banner = defineSlotRecipe({
  base: {
    closeButton: {
      _dark: { color: 'gray.2' },
      _hover: { opacity: 1 },
      color: 'gray.11',
      h: 8,
      opacity: 0.8,
      w: 8,
    },
    closeIcon: {
      h: 4,
      mx: 'auto',
      w: 4,
    },
    content: {
      fontWeight: 'medium',
      px: 4,
      textAlign: 'center',
      textStyle: 'sm',
      truncate: true,
      w: 'full',
    },
    root: {
      '& ~ div': {
        '& .sidebar-container': {
          // pt: '1.5rem'
        },
        '&.nav-container': {
          md: { top: 0 },
          top: 10,
        },
      },
      _dark: {
        bgGradient: 'simple',
        color: 'gray.11',
      },
      _ltr: { pl: 10 },
      _print: { display: 'none' },
      _rtl: { pr: 10 },
      alignItems: 'center',
      bgGradient: 'inverted',

      'body.banner-hidden &': {
        '& ~ div': {
          '& .sidebar-container': {
            pt: '16',
          },
          '&.nav-container': {
            top: 0,
          },
        },
        display: 'none',
      },
      color: 'gray.1',
      display: 'flex',
      h: 'var(--banner-height)',
      md: { position: 'relative' },
      position: 'sticky',
      px: 2,
      top: 0,
      zIndex: 20,
    },
  },
  className: 'bannerRecipe',
  description: 'A banner style',
  slots,
})
