'use client'
import { Progress, type ProgressProps } from '../core/progress'
import { type ScrollProgressSelector, useScrollProgress } from '../hooks/use-scroll-progress'

export type ProgressBarProps = ProgressProps & {
  selector?: ScrollProgressSelector
}

export const ProgressBar = ({ selector, ...props }: ProgressBarProps) => {
  const progress = useScrollProgress(selector)

  return progress > 5 && <Progress value={progress} min={0} max={100} {...props} />
}
