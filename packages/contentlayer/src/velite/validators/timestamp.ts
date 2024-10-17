import { exec } from 'node:child_process'
import { stat } from 'node:fs/promises'
import { promisify } from 'node:util'
import { defineSchema, s } from 'velite'

const execAsync = promisify(exec)

export const timestamp = defineSchema(() =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === 'string')
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: 'custom',
          message: '`s.timestamp()` schema will resolve the value from `git log -1 --format=%cd`',
        })
      }
      const { stdout } = await execAsync(`git log -1 --format=%cd ${meta.path}`)

      if (stdout) {
        return new Date(stdout).toISOString()
      }

      if (value != null) {
        addIssue({
          fatal: false,
          code: 'custom',
          message: '`s.timestamp()` schema will resolve the file modified timestamp',
        })
      }

      const stats = await stat(meta.path)

      return stats.mtime.toISOString()
    }),
)
