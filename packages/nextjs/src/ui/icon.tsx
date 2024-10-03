import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  height: 32,
  width: 32,
}
export const contentType = 'image/png'

/**
 * Generate site Icon
 *
 * see `app/api/og/route.tsx` for other ImageResponse examples
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#generate-icons-using-code-js-ts-tsx
 */
export const Icon = () => {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: 'withe',
        // color: "white",
        display: 'flex',
        fontSize: 24,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      🐼
    </div>,
    {
      ...size,
    },
  )
}
