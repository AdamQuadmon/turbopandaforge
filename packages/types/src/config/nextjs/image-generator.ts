/**
 * ImageGeneratorConfig: Configuration for generating Open Graph images.
 *
 * `font`: Font family used in images
 * `fontStyle`: Style settings for the font
 * `image`: Default image URL
 * `imageApi`: API endpoint for generating images
 * `imageHeight`: Height of the images
 * `imageWidth`: Width of the images
 * `nameFontSize`: Font size for the name text in images
 * `titleFontSize`: Font size for the title text in images
 */
export interface ImageGeneratorConfig {
  font: string
  fontStyle: Style$1 // Replace with the actual type
  image: string
  imageApi: string
  imageHeight: string
  imageWidth: string
  nameFontSize: string
  titleFontSize: string
}

/**
 * Available Satori Font Styles settings
 */
type Style$1 = 'italic' | 'normal'
