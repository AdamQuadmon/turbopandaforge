import { s } from 'velite'

const escapeRegex = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/**
 * generate a path schema
 * @param by unique by this, used to create a unique set of slugs
 * @param reserved reserved slugs, will be rejected
 * @returns slug schema
 */
export const path = (by = 'global', reserved: string[] = []) => {
  const sanitizedReserved = reserved.map(escapeRegex)
  const reservedRegex = new RegExp(`^(${sanitizedReserved.join('|')})(?:\/+.*)*$`, 'i')
  return (
    s
      .string()
      .min(3)
      .max(200)
      // allow az09/az-09
      // disallow az09//az--09
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/i, 'Invalid path')
      .regex(reservedRegex, 'Reserved path')
      .superRefine((value, { path, meta, addIssue }) => {
        const key = `schemas:path:${by}:${value}`
        const { cache } = meta.config
        if (cache.has(key)) {
          addIssue({
            fatal: true,
            code: 'custom',
            message: `duplicate path '${value}' in '${meta.path}:${path.join('.')}'`,
          })
        } else {
          cache.set(key, meta.path)
        }
      })
  )
}
