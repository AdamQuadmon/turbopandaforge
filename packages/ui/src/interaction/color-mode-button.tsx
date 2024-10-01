'use client'
import { Box } from '@turbopandaforge/styled-system/jsx'
import { useIsClient } from '@uidotdev/usehooks'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { IconButton } from '../core/icon-button'

export const ColorModeButton = () => {
  const isClient = useIsClient()
  const { theme, setTheme } = useTheme()

  if (!isClient) return <Box width="9" height="9" />

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <IconButton
      onClick={handleClick}
      aria-label="Change Theme"
      variant="ghost"
      size={{ base: 'md', md: 'sm' }}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}
