/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose",
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@react-pdf/renderer": "@react-pdf/renderer/lib/react-pdf.js",
    };
    return config;
  },
  output: "export",
};

module.exports = nextConfig;
