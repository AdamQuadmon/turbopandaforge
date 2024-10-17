import type { SubscribeConfig } from '@turbopandaforge/types/seo/actions'

import type { SubscribeAction } from 'schema-dts'

export const getSubscribeAction = ({ target, serviceName }: SubscribeConfig): SubscribeAction => {
  const jsonLd: SubscribeAction = {
    '@type': 'SubscribeAction',
    target,
    object: {
      '@type': 'Service',
      name: serviceName,
    },
  }

  return jsonLd
}
