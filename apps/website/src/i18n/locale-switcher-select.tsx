'use client'

import LocaleSelect, { type LocaleOption } from '@turbopandaforge/ui/interaction/locale-select'

import type { ListCollection } from '@ark-ui/react/select'
import type { Locale } from '~/config/locale'

type Props = {
  locale: string
  label: string
  locales: LocaleOption[]
}

export default function LocaleSwitcherSelect({ locale, label, locales }: Props) {
  function onValueChange(details: ListCollection<LocaleOption>) {
    const nextLocale = details.items.pop()?.value as Locale
    // TODO: implement go to url
  }

  return <LocaleSelect {...{ locales, locale, label, onValueChange }} />
}
