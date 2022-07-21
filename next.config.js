const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }
    return config
  }
}
