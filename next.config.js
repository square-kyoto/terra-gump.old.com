/** @type { import('next').NextConfig } */

const isProd = process.env.NODE_ENV === 'production';
const DEPLOY_URL = 'https://terra-gump.com';

const nextConfig = {
  publicRuntimeConfig: {
    deployUrl: isProd ? DEPLOY_URL : '',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
