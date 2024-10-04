import type en from './messages/en.json'
import type { formats } from './src/i18n/request'

type Formats = typeof formats
type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
  // Use type safe formats with `next-intl`
  interface IntlFormats extends Formats {}
}
