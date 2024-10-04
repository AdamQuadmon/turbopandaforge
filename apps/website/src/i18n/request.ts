import { getRequestConfig } from 'next-intl/server'
import { defaultLocale } from '~/config/routing'

const config: ReturnType<typeof getRequestConfig> = getRequestConfig(async () => {
  const locale = defaultLocale

  return {
    locale,
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../../messages/en.json')
        : import(`../../messages/${locale}.json`))
    ).default,
  }
})

export default config
