import { s } from 'velite'

export const count = s
  .object({ total: s.number(), posts: s.number() })
  .default({ total: 0, posts: 0 })
