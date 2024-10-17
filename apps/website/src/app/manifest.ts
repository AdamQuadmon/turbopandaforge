import type { MetadataRoute } from 'next'
import { getOptions } from '~/lib/content'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const {
    metadata: { description, name },
  } = getOptions()

  return {
    name,
    description,
    start_url: '/',
    theme_color: '#101E33',
  }
}
