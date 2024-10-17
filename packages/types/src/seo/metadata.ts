export const OPENGRAPH_SIZES = {
  width: 1200,
  height: 630,
}

export const TWITTER_SIZES = {
  width: 1200,
  height: 600,
}

export const IMAGE_SIZES = {
  og: OPENGRAPH_SIZES,
  twitter: TWITTER_SIZES,
}

export const CONTENT_TYPE = 'image/png'

export const ICONS_METADATA = [
  {
    contentType: CONTENT_TYPE,
    size: { width: 32, height: 32 },
    id: 'xs',
  },
  {
    contentType: CONTENT_TYPE,
    size: { width: 48, height: 48 },
    id: 'small',
  },
  {
    contentType: CONTENT_TYPE,
    size: { width: 72, height: 72 },
    id: 'medium',
  },
]
