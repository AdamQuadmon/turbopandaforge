import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

import { fontsClassNames } from '~/config/fonts'
import './globals.css'

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = 'en'

  return (
    <html lang={locale} className={fontsClassNames} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
