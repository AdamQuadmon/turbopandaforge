/**
 * Contact info
 */
export interface Contacts {
  address?: string
  date?: string
  email?: string
  telephone?: string
  url?: string
}

/**
 * Social links
 */
export interface Socials {
  facebook?: string
  github?: string
  instagram?: string
  linkedin?: string
  mastodon?: string
  twitter?: string
  wikipedia?: string
  youtube?: string
}

export interface Person {
  contacts: Contacts
  identity: PersonIdentity
  nicknames?: string[]
  occupation?: Occupation[]
  /**
   * It's the Schema '@id' of the current Person
   * It should be in the form `https://mypersonal.website#myself`
   *
   * If not provided it will be `siteUrl/personPath/about/#slug`
   */
  personId?: string
}

export interface PersonIdentity {
  avatar: string
  fullName: string
  gender?: Gender
  middleName?: string
  name: string
  surname?: string
}
export interface Occupation {
  name: string
  qualifications: string[]
}
export interface Gender {
  name: Genders
  pronouns: string[]
}

export type Genders = 'female' | 'male'
