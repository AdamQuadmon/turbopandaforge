import { ark } from '@ark-ui/react/factory'
import { styled } from '@turbopandaforge/styled-system/jsx'
import { badge } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps } from '@turbopandaforge/styled-system/types'

export type BadgeProps = ComponentProps<typeof Badge>
export const Badge = styled(ark.div, badge)
