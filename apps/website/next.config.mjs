import { getAppConfig } from '@turbopandaforge/configs/app'
// import { withBundleAnalyzer, withMillion } from '@turbopandaforge/nextjs/plugins'

const appConfig = await getAppConfig()

/** @type {import('next').NextConfig} */
const nextConfig = appConfig.nextjs

// export default withBundleAnalyzer(withMillion(nextConfig))
export default nextConfig
