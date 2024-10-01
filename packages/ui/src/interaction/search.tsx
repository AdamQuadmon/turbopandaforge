'use client'
import { HStack } from '@turbopandaforge/styled-system/jsx'
import { SearchIcon } from 'lucide-react'
import { IconButton } from '../core/icon-button'
import { Input } from '../core/input'

export const SearchForm = () => {
  const handleClick = () => {
    console.log('search')
  }
  return (
    <HStack gap="1">
      <Input placeholder="search" fontFamily="mono" />

      <IconButton onClick={handleClick} aria-label="Search" size={{ base: 'md', md: 'sm' }}>
        <SearchIcon />
      </IconButton>
    </HStack>
  )
}
