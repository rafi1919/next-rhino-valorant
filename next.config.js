/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.contentstack.io"], // Add the hostname here
  },
};

module.exports = nextConfig;
