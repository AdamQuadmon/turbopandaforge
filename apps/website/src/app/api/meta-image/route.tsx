import type { NextRequest } from 'next/server'

import { IMAGE_SIZES } from '@turbopandaforge/types/seo/metadata'
import { MetaImage } from '@turbopandaforge/ui/images/meta-image'
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 *! This route should not be exposed to public.
 ** It should be used only internally.
 */
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const title = searchParams.get('title') || 'turbopandaforge'
  const subtitle = searchParams.get('subtitle') || undefined
  const backgroundURL = searchParams.get('backgroundURL') || undefined
  const requestedType = searchParams.get('type') || 'og'

  const type = requestedType === 'twitter' ? requestedType : 'og'

  return new ImageResponse(<MetaImage {...{ title, subtitle, backgroundURL }} />, {
    ...IMAGE_SIZES[type as 'og' | 'twitter'],
  })
}
