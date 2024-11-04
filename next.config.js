/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode
  swcMinify: true, // Enables SWC minification
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  publicRuntimeConfig: {
    // Your public configuration
  },
  images: {
    domains: [
      "s3-alpha-sig.figma.com",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
