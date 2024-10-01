import { ark } from '@ark-ui/react/factory'
import { styled } from '@turbopandaforge/styled-system/jsx'
import { kbd } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps } from '@turbopandaforge/styled-system/types'

export type KbdProps = ComponentProps<typeof Kbd>
export const Kbd = styled(ark.kbd, kbd)
