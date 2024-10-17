import type { ActionsConfig } from '@turbopandaforge/types/seo/actions'

import type { Action } from 'schema-dts'

import { getSearchAction } from './search'
import { getSubscribeAction } from './subscribe'

const actionMappers = {
  search: getSearchAction,
  subscribe: getSubscribeAction,
}

type ActionKey = keyof ActionsConfig

export const getPotentialActionSchema = (actions: ActionsConfig): Action[] | undefined => {
  const jsonLdActions = (Object.keys(actions) as ActionKey[])
    .filter((k) => !!actions[k])
    // @ts-ignore actions[key] exists and has the same signature as actionMappers[key]
    .map((key) => actionMappers[key](actions[key]))
    .filter((a) => !!a)

  return jsonLdActions.length ? jsonLdActions : undefined
}
