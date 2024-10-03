import { useEffect, useRef, useState } from 'react'

export type ScrollProgressSelector = 'article' | 'html'

/**
 * @see https://github.com/gorzelinski/gorzelinski.com/blob/main/hooks/use-scroll-progress.tsx
 */
export function useScrollProgress(selector: ScrollProgressSelector = 'html') {
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const animationFrame = useRef<number>(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      const root = document.documentElement
      // biome-ignore lint/style/noNonNullAssertion: assume element always present
      const element = document.querySelector(selector)!
      const scrollableHeight = element.scrollHeight - window.innerHeight
      const currentScrollY = root.scrollTop - element.offsetTop
      const scrollProgress = (currentScrollY / scrollableHeight) * 100

      if (scrollProgress < 0) setScrollProgress(0)
      else if (scrollProgress > 100) setScrollProgress(100)
      else setScrollProgress(scrollProgress)

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        animationFrame.current = window.requestAnimationFrame(updateScrollProgress)

        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.cancelAnimationFrame(animationFrame.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [selector])

  return scrollProgress
}
