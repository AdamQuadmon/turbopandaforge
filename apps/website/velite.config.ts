import { getConfig } from '@turbopandaforge/contentlayer/velite/config'

const config = getConfig(process.env.LOCALE || 'en')

export default config
