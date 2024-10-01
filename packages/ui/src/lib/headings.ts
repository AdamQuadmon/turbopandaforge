export type HeadingTitles = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

/**
 * Get a sub heading for the given `mainHeading`
 */
export const getSubTitleAs = (mainHeading: HeadingTitles) => {
  const headingMap: Record<HeadingTitles, HeadingTitles> = {
    h1: 'h2',
    h2: 'h3',
    h3: 'h4',
    h4: 'h5',
    h5: 'h6',
    h6: 'span',
    span: 'span',
  }

  return headingMap[mainHeading] || 'span'
}
