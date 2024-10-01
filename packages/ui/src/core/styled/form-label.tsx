import { ark } from '@ark-ui/react/factory'
import { styled } from '@turbopandaforge/styled-system/jsx'
import { formLabel } from '@turbopandaforge/styled-system/recipes'
import type { ComponentProps } from '@turbopandaforge/styled-system/types'

export type FormLabelProps = ComponentProps<typeof FormLabel>
export const FormLabel = styled(ark.label, formLabel)
