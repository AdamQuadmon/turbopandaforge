import bundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const _withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE_BUNDLE === 'true',
})

export const withBundleAnalyzer = (nextConfig: NextConfig) => _withBundleAnalyzer(nextConfig)
