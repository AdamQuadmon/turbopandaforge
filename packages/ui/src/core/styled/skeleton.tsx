'use client'
import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@turbopandaforge/styled-system/jsx'
import { type SkeletonVariantProps, skeleton } from '@turbopandaforge/styled-system/recipes'
import type { JsxStyleProps } from '@turbopandaforge/styled-system/types'
import { forwardRef } from 'react'

const StyledSkeleton = styled(ark.div, skeleton)

export interface SkeletonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>>,
    SkeletonVariantProps {
  /**
   *
   * @default false
   */
  isLoaded?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { isLoaded, ...otherProps } = props

  if (isLoaded) {
    return <styled.div animation="fade-in" ref={ref} {...otherProps} />
  }
  return <StyledSkeleton ref={ref} {...otherProps} />
})

Skeleton.displayName = 'Skeleton'
