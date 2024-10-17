import { CONTENT_TYPE, IMAGE_SIZES } from '@turbopandaforge/types/seo/metadata'
import type { Metadata } from 'next'

type MetaImage =
  | NonNullable<Metadata['openGraph']>['images']
  | NonNullable<Metadata['twitter']>['images']

export function getMetaImage(url: string, alt: string, size: 'og' | 'twitter'): MetaImage {
  return {
    url,
    alt,
    type: CONTENT_TYPE,
    ...IMAGE_SIZES[size],
  }
}
