import type { MetaImageProps } from '@turbopandaforge/types/ui/images'

export const MetaImage = ({ title }: MetaImageProps) => {
  return (
    <div
      style={{
        fontSize: 128,
        background: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {title}
    </div>
  )
}
