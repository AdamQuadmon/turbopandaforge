export const locales = ['en', 'it']
export const defaultLocale = process.env.LOCALE || 'en'

export type Locale = (typeof locales)[number]
