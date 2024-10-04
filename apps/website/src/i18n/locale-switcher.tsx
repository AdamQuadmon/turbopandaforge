import { useLocale, useTranslations } from 'next-intl'
import { locales } from '~/config/routing'
import LocaleSwitcherSelect from './locale-switcher-select'

/**
 * This was created to handle routed i18n
 * In a configuration with no routing is the CMS that should provide alternate routes
 * TODO: integrate with velite and SEO
 */
export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  const localeLabels = locales.map((cur) => ({
    label: t('locale', { locale: cur }),
    value: cur,
    path: '',
  }))

  return <LocaleSwitcherSelect locale={locale} label={t('label')} locales={localeLabels} />
}
