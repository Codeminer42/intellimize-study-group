/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imageio.forbes.com'],
  },
};

module.exports = nextConfig;
