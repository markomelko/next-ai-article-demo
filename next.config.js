/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE: "FROM_CONTENTFUL",
    CONTENTFUL_SPACE_KEY: "FROM_CONTENTFUL",
  },
};

module.exports = nextConfig;
