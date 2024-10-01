import { ark } from '@ark-ui/react/factory'
import { styled } from '@turbopandaforge/styled-system/jsx'
import { type ButtonVariantProps, button } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps } from '@turbopandaforge/styled-system/types'

export type IconButtonProps = ComponentProps<typeof IconButton>
export const IconButton = styled(ark.button, button, {
  defaultProps: { px: '0' } as ButtonVariantProps,
})
