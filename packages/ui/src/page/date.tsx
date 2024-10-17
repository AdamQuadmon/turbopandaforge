import type { Page } from '@turbopandaforge/types/content/pages'
import { format, parseISO } from 'date-fns'

interface PageDateProps {
  page: Page
}
export const PageDate = ({ page }: PageDateProps) => {
  const { date } = page
  return date ? <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time> : null
}
