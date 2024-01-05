const withMDX = require('@next/mdx')();
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isProd ? 'export' : undefined,
  assetPrefix: isProd ? 'https://www.tetmon.com/staging.tetmon.github.io/' : undefined,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  }
}

module.exports = withMDX(nextConfig)
