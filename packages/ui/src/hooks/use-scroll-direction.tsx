import { useEffect, useRef, useState } from 'react'
/**
 *
 * @see https://github.com/gorzelinski/gorzelinski.com/blob/main/hooks/use-scroll-direction.tsx
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        animationFrame.current = window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrollDirection
}
