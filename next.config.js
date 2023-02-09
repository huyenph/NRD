const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig
module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents:
      true |
      {
        displayName: true,
        ssr: true,
      },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(
        __dirname,
        "./node_modules/apexcharts-clevision"
      ),
    };
    return config;
  },
};
