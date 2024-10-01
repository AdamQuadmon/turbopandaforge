import { ark } from '@ark-ui/react/factory'
import { styled } from '@turbopandaforge/styled-system/jsx'
import { textarea } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps } from '@turbopandaforge/styled-system/types'

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(ark.textarea, textarea)
