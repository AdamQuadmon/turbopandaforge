import { cx } from '@turbopandaforge/styled-system/css'

import { Outfit, Roboto_Mono } from 'next/font/google'

export const outfit = Outfit({ subsets: ['latin'], variable: '--font-body' })
export const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-code' })

export const fontsClassNames = cx(outfit.variable, roboto.variable)
