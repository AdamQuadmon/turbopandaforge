import { getAppConfig } from '@turbopandaforge/configs/app'

// import bundleAnalyzer from '@next/bundle-analyzer'
// import MillionLint from '@million/lint'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const appConfig = await getAppConfig()

/** @type {import('next').NextConfig} */
const nextConfig = appConfig.nextjs

// const _withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE_BUNDLE === 'true',
// })
// const withMillion = (nextConfig: NextConfig) => MillionLint.next({ rsc: true })(nextConfig)
// export default withBundleAnalyzer(withMillion)

export default withNextIntl(nextConfig)
