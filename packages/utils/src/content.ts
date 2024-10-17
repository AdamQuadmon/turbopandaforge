import { isProductionOrDebug } from './env'

export const shouldFilterStatus = (element: { status?: string | null }) =>
  isProductionOrDebug ? element.status === 'published' : true
