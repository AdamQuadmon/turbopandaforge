/**
 *? These values are mainly used by i18n stuff
 *
 *! The rest of the app uses locale from Velite Options
 */

export const locale = process.env.LOCALE || 'en'
export const locales = process.env.LOCALE_AVAILABLE?.split(',') || [locale]

export type Locale = (typeof locales)[number]
