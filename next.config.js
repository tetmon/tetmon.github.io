const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: isProd ? 'export' : undefined,
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true
  },
  distDir: 'out',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: "asset/resource"
    });

    return config;
  },
}

if (!isProd) {
  nextConfig.rewrites = () => {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html'
      }
    ]
  }
}

module.exports = nextConfig;