import { Box } from '@turbopandaforge/styled-system/jsx'
import { NavbarFull } from '@turbopandaforge/ui/navigation/navbar-full'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

import { fontsClassNames } from '~/config/fonts'
import { navbar } from '~/config/navigation'

export default async function LocaleLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  return (
    <html lang={locale} className={fontsClassNames} suppressHydrationWarning>
      <body>
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
