import { HStack } from '@turbopandaforge/styled-system/jsx'
import { LogIn, UserRoundPlus } from 'lucide-react'
import { SignInButton } from './sign-in-button'
import { SignUpButton } from './sign-up-button'

export const UserButtons = () => {
  return (
    <HStack gap="1">
      <SignUpButton aria-label="Sign up" size={{ base: 'md', md: 'sm' }}>
        <UserRoundPlus />
      </SignUpButton>
      <SignInButton aria-label="Sign in" size={{ base: 'md', md: 'sm' }}>
        <LogIn />
      </SignInButton>
    </HStack>
  )
}
