import { defineRecipe } from '@pandacss/dev'

export const background = defineRecipe({
  base: {},
  variants: {
    visual: {
      radiant: {
        position: 'absolute',
        display: { base: 'none', sm: 'block' },
        background:
          'radial-gradient(42.48% 42.48% at calc(50% + 100vw / 2) center, var(--colors-accent-default) 0%, rgba(235, 94, 65, 0) 100%)',
        filter: 'blur(282px)',
        inset: '0',
      },
    },
    size: {
      fullHeight: { height: '830px' },
    },
  },
  className: 'backgroundRecipe',
  description: 'Background style',
})
