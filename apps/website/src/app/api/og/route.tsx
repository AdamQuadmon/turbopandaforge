import type { NextRequest } from 'next/server'

import { getOgImage } from '@turbopandaforge/nextjs/ui/opengraph-image'

export const runtime = 'edge'

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  return getOgImage({
    emoji: searchParams.get('emoji') || undefined,
    hero: searchParams.get('hero') || undefined,
    path: searchParams.get('path') || undefined,
    title: searchParams.get('title') || undefined,
  })
}
