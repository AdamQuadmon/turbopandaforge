import MillionLint from '@million/lint'
import type { NextConfig } from 'next'

export const withMillion = (nextConfig: NextConfig) => MillionLint.next({ rsc: true })(nextConfig)
