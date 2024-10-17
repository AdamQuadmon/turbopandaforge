export interface SearchConfig {
  targetUrl: string
}

export interface SubscribeConfig {
  target: string
  serviceName: string
}

export interface ActionsConfig {
  search?: SearchConfig
  subscribe?: SubscribeConfig
}
