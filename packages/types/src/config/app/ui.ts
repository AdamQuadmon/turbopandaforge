/**
 * UiConfig: User Interface Configuration for the website.
 * `colorScheme`: Defines the color scheme used (Dark/Light mode).
 * `darkModeToggle`: Enables or disables a toggle for dark mode
 * `defaultTheme`: Defines the default theme used (Dark/Light).
 * `emoji`: Emoji mapping for various components or messages.
 * `font`: Defines the fonts used in various parts of the website.
 * `icon`: Site Icon. Not used for favicon, see Next.js
 * `layout`: Defines the overall layout of the website.
 * - `boxed`: contained layout
 * - `fluid`: full width layout
 * `navigationType`: Defines the navigation type of the website.
 * `pathEmojiMap`: Map of routes to specific emojis.
 * `pathTitleMap`: Map of routes to specific titles.
 * `primaryColor`: Primary color used for UI elements.
 * `secondaryColor`: Secondary color used for UI elements.
 * `themeColor`: Often used for browser address bars or UI elements.
 */
export interface UiConfig {
  colorScheme: ColorScheme
  darkModeToggle: boolean
  defaultTheme: 'dark' | 'light'
  emoji: Emoji
  font: FontConfig
  icon: string
  layout: LayoutType
  navigationType: NavigationType
  pathEmojiMap: Record<CommonRoutePaths, string>
  pathTitleMap: Record<CommonRoutePaths, string>
  primaryColor: string
  secondaryColor: string
  themeColor: {
    dark: string
    light: string
  }
}

/**
 * FontConfig: Configuration for fonts used in various parts of the website.
 *
 * `header`: Font family for headers (h1, h2, etc.)
 * `body`: Font family for the main body text
 * `code`: Font family for code snippets and blocks
 * `quotes`: Font family for blockquote and citations
 * `buttons`: Font family for UI buttons
 */
interface FontConfig {
  body: string
  buttons: string
  code: string
  header: string
  quotes: string
}

type NavigationType = 'boxed' | 'fluid'

/**
 * Available color schemes for the website theme.
 */
type ColorScheme = 'dark light' | 'dark' | 'light dark' | 'light' | 'normal' | 'only light'

/**
 * Available routes for Site Config path settings
 */
type CommonRoutePaths = '404' | 'about' | 'blog' | 'dashboard' | 'donate' | 'error' | 'projects'

/**
 * Available Next Emoji settings
 */
type Emoji = 'blobmoji' | 'noto' | 'openmoji' | 'twemoji'

type LayoutType = 'sidebar' | 'topbar' | 'topbar-sidebar'
