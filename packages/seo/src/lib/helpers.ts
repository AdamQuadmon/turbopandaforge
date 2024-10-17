import type { Options } from '@turbopandaforge/types/config/options'

/**
 * sameAs can be the website urls in other media
 */
export const getSameAsFromContacts = (contacts: Options['contacts']) => {
  const { phone, email, ...urlContacts } = contacts
  const sameAs = Object.entries(urlContacts).map(([_medium, url]) => url)

  return sameAs
}
