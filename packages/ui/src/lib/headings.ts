export type HeadingTitles = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
export type TextSizes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'

/**
 * Get a sub heading for the given `mainHeading`
 */
export const getNextHeading = (currentHeading: HeadingTitles) => {
  const headingMap: Record<HeadingTitles, HeadingTitles> = {
    h1: 'h2',
    h2: 'h3',
    h3: 'h4',
    h4: 'h5',
    h5: 'h6',
    h6: 'span',
    span: 'span',
  }

  return headingMap[currentHeading] || 'span'
}

/**
 * Get next heading size for the given `mainHeading`
 */
export const getNextSize = (currentSize: TextSizes) => {
  const sizeMap: Record<TextSizes, TextSizes> = {
    xs: 'xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
    '2xl': 'xl',
    '3xl': '2xl',
    '4xl': '3xl',
    '5xl': '4xl',
    '6xl': '5xl',
    '7xl': '6xl',
  }

  return sizeMap[currentSize] || 'lg'
}

/**
 * Get next heading size for the given `mainHeading`
 */
export const getNextHalfSize = (currentSize: TextSizes) => {
  const sizeMap: Record<TextSizes, TextSizes> = {
    xs: 'xs',
    sm: 'xs',
    md: 'xs',
    lg: 'sm',
    xl: 'md',
    '2xl': 'lg',
    '3xl': 'xl',
    '4xl': '2xl',
    '5xl': '3xl',
    '6xl': '4xl',
    '7xl': '5xl',
  }

  return sizeMap[currentSize] || 'lg'
}
