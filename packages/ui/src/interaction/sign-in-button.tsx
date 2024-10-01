'use client'
import { useRouter } from 'next/navigation'
import { IconButton, type IconButtonProps } from '../core/icon-button'

export const SignInButton = (props: IconButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(
      `/auth/signin?${new URLSearchParams({
        callbackUrl: window.location.href,
      })}`,
    )
  }
  return <IconButton {...props} onClick={handleClick} />
}
