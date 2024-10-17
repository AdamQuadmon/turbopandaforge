import { getWebSiteMetadata } from '@turbopandaforge/seo/metadata/website'
import { getWebSiteSchema } from '@turbopandaforge/seo/schema/website'
import { JSON_LD } from '@turbopandaforge/seo/ui/json-ld'
import { Box } from '@turbopandaforge/styled-system/jsx'
import { NavbarFull } from '@turbopandaforge/ui/navigation/navbar-full'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

import { fontsClassNames } from '~/config/fonts'
import { navbar } from '~/config/navigation'
import { siteUrl } from '~/config/routing'
import { getOptions } from '~/lib/content'

export const generateMetadata = (): Metadata => {
  const options = getOptions()

  return {
    ...getWebSiteMetadata({ siteUrl, options }),
  }
}

export default async function WebLayout({ children }: PropsWithChildren) {
  const options = getOptions()
  const messages = await getMessages()

  const jsonLd = getWebSiteSchema({ siteUrl, options })

  return (
    <html lang={options.locale} className={fontsClassNames} suppressHydrationWarning>
      <body>
        <JSON_LD {...jsonLd} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <Box minH="100%">
              <NavbarFull {...navbar} />
              {children}
            </Box>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
