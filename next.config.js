/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.contentstack.io"], // Add the hostname here
  },
  async rewrites() {
    return [
      {
        source: "/api/fetchDataNews",
        destination:
          "https://playvalorant.com/page-data/id-id/news/page-data.json",
      },
    ];
  },
};

module.exports = nextConfig;
