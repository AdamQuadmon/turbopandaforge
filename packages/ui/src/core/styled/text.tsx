import { styled } from '@turbopandaforge/styled-system/jsx'
import { type TextVariantProps, text } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps, StyledComponent } from '@turbopandaforge/styled-system/types'

type ParagraphProps = TextVariantProps & { as?: React.ElementType }

export type TextProps = ComponentProps<typeof Text>
export const Text = styled('p', text) as StyledComponent<'p', ParagraphProps>
