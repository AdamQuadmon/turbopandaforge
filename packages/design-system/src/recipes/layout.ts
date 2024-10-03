import { defineSlotRecipe } from '@pandacss/dev'

const slots = ['aside', 'main']

export const layout = defineSlotRecipe({
  base: {
    aside: {
      bg: {
        base: 'gray.11',
        _dark: 'gray.2',
      },
      borderRightWidth: '1px',
      position: 'fixed',
      top: '0',
      bottom: '0',
      display: { base: 'none', md: 'block' },
      ps: 'max(32px, calc((100vw - (1440px - 64px)) / 2))',
      pe: '8',
      minWidth: '272px',
      overflow: 'auto',
      width: {
        base: '272px',
        lg: 'calc((100vw - (1440px - 64px)) / 2 + 272px - 32px)',
      },
      zIndex: 'overlay',
    },
    main: {
      minWidth: '0',
      flex: '1',
      ps: {
        base: '0',
        md: 'max(calc((100vw - 1440px) / 2 + 272px), 272px)',
      },
      pe: 'calc((100vw - 1440px) / 2)',
    },
  },
  className: 'layoutRecipe',
  description: 'Layout style',
  slots,
})
