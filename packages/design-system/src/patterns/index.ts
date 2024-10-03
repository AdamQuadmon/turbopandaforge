import { definePattern } from '@pandacss/dev'

export const patterns = {
  extend: {
    container: definePattern({
      transform(props: Record<string, unknown>) {
        return {
          position: 'relative',
          width: '100%',
          maxW: '8xl',
          mx: 'auto',
          px: { base: '4', md: '8' },
          ...props,
        }
      },
    }),
    scrollable: definePattern({
      description: 'A container that allows for scrolling',
      defaultValues: {
        direction: 'vertical',
        hideScrollbar: true,
      },
      properties: {
        // The direction of the scroll
        direction: { type: 'enum', value: ['horizontal', 'vertical'] },
        // Whether to hide the scrollbar
        hideScrollbar: { type: 'boolean' },
      },
      // disallow the `overflow` property (in TypeScript)
      blocklist: ['overflow'],
      transform(props) {
        const { direction, hideScrollbar, ...rest } = props
        return {
          overflow: 'auto',
          height: direction === 'horizontal' ? '100%' : 'auto',
          width: direction === 'vertical' ? '100%' : 'auto',
          scrollbarWidth: hideScrollbar ? 'none' : 'auto',
          WebkitOverflowScrolling: 'touch',
          '&::-webkit-scrollbar': {
            display: hideScrollbar ? 'none' : 'auto',
          },
          ...rest,
        }
      },
    }),
  },
}
