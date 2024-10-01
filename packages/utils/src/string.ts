import { capitalize, titleCase } from 'string-ts'

/**
 * Converts a full file path into a title-case string.
 * - All segments except the last will form the first part of the title.
 * - Last segment forms the second part of the title after a colon.
 * `path - The full file path.
 * @returns The title-case string.
 */
export const fullPathToTitleCase = (path: string): string => {
  const segments = path.split('/')
  const lastSegment = segments.pop()
  const initialSegments = segments.join(' ')

  const initialTitle = titleCase(initialSegments)
  const lastTitle = lastSegment ? titleCase(lastSegment.split('.')[0] || '') : null

  return lastTitle ? `${initialTitle}: ${lastTitle}` : initialTitle
}

/**
 * Creates a function to find if a string exists in a set of strings.
 * @example const isLocale = findLocale(new Set(['en', 'es'])); isLocale('en') // returns true
 */
const findLocale = (locales: Set<string>) => (part: string) => locales.has(part)

/**
 * Joins an array of domain parts into a title case string.
 * Adds a dot before the top-level domain (TLD) and spaces between the rest.
 * @example joinDomainParts(['my', 'website', 'com']) // returns "MyWebsite.com"
 */
const joinDomainParts = (parts: string[]) => {
  const tld = parts[parts.length - 1]
  const otherParts = parts.slice(0, -1)

  return `${otherParts.join('')}.${tld?.toLowerCase()}`
}

/**
 * Title case a website URL and adds the locale label if not the default locale.
 *
 * `url` - The full URL to title case.
 * `defaultLocale` - Default locale to exclude from the title.
 * `localeLabels` - Mapping of locale abbreviations to full names.
 * `localeIcon` - Icon to separate site name and locale.
 */
export const titleCaseUrl = (
  url: string,
  defaultLocale: string,
  localeLabels: Record<string, string> = {},
  localeIcon = '🌐',
): string => {
  const knownLocales = new Set(Object.keys(localeLabels))
  const urlObj = new URL(url)
  const pathParts = urlObj.pathname.split('/').filter(Boolean)
  const domainParts = urlObj.hostname.split('.')

  const locale =
    domainParts.find(findLocale(knownLocales)) || pathParts.find(findLocale(knownLocales))

  const siteName = joinDomainParts(domainParts.filter((part) => part !== locale).map(capitalize))

  return locale && locale !== defaultLocale
    ? `${siteName} ${localeIcon} ${localeLabels[locale]}`
    : siteName
}
