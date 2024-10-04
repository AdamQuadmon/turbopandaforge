'use client'

import { css } from '@turbopandaforge/styled-system/css'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import type { ComponentProps } from 'react'

// TODO: implement
export function NavLink({ href, ...rest }: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/'
  const isActive = pathname === href

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={css({ color: isActive ? 'accent.4' : 'gray.4' })}
      href={href}
      {...rest}
    />
  )
}
