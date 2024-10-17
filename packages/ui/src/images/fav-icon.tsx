import type { PropsWithChildren } from 'react'

export const FavIcon = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 88,
        background: '#000',
        color: '#fafafa',
      }}
    >
      {children}
    </div>
  )
}
