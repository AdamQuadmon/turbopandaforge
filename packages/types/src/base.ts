/**
 * Social links
 */
export interface VerificationCodes {
  google?: string
  yahoo?: string
  yandex?: string
  me?: string
}

export interface Contacts {
  email?: string
  facebook?: string
  github?: string
  instagram?: string
  linkedin?: string
  mastodon?: string
  twitter?: string
  wikipedia?: string
  youtube?: string
  phone?: string
}

export interface BasePerson {
  name: string
  url: string
}

export interface Author extends BasePerson {
  slug: string
}

export interface Person extends BasePerson {
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
