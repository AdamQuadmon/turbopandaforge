import { LogLevel } from '@turbopandaforge/types/utils/logging'
import { consola } from 'consola'
import type { NextConfig } from 'next'

/**
 * Resolve Next.Js related user config
 *
 * @param {NextConfig} nextjs - The configuration object from the user.
 */
export const resolveUserDefinedOptions = (nextjs?: NextConfig) => {
  if (nextjs) {
    const updatedNextjs = processFields(nextjs, LogLevel.WARNING)
    processFields(updatedNextjs, LogLevel.DELETE)
    return updatedNextjs
  }

  return nextjs
}

/**
 * Remove not allowed fields and suggest best practices
 */
const processFields = (
  nextjs: Record<string, unknown>,
  logType: LogLevel,
): Record<string, unknown> => {
  let updatedNextjs = { ...nextjs }
  for (const validator of Object.entries(VALIDATOR[logType])) {
    const [category, { fields, message }] = validator
    for (const field of fields) {
      if (updatedNextjs[field] !== undefined) {
        if (logType === LogLevel.DELETE) {
          const { [field]: _, ...rest } = updatedNextjs
          updatedNextjs = rest
          consola.warn(
            `WARNING: Changing ${field} is not allowed for ${category} issues. ${message}`,
          )
        } else {
          consola.warn(`WARNING: Changing ${field} might cause ${category} issues. ${message}`)
        }
      }
    }
  }

  return updatedNextjs
}

/**
 * Validation errors
 */
const VALIDATOR = {
  DELETE: {
    TURBO: {
      fields: ['webpack'],
      message: 'Use `turbo` instead.',
    },
    ENV: {
      fields: ['env'],
      message: 'Use `dotEnv` and native Next.js features instead.',
    },
    DEBUG: {
      fields: ['compress', 'cleanDistDir', 'productionBrowserSourceMaps', 'generateEtags'],
      message: 'If you wanna disable it use `DEBUG` flag instead.',
    },
    APPROUTER: {
      fields: ['appDir', 'reactStrictMode'],
      message: 'Using App router this is not needed.',
    },
  },
  WARNING: {
    SEO: {
      fields: ['trailingSlash'],
      message: 'Setting it true is not a best practice.',
    },

    SECURITY: {
      fields: ['urlImports'],
      message: 'Modifying it could expose your application to vulnerabilities.',
    },
  },
}
