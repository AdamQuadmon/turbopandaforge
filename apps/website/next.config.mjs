import { getAppConfig } from '@turbopandaforge/configs/app'
// import { withBundleAnalyzer, withMillion } from '@turbopandaforge/nextjs/plugins'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const appConfig = await getAppConfig()

/** @type {import('next').NextConfig} */
const nextConfig = appConfig.nextjs

// export default withBundleAnalyzer(withMillion(nextConfig))
export default withNextIntl(nextConfig)
