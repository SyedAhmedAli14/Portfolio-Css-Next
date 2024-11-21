/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  future: {
    webpack5: true,
  },
  swcMinify: false, // Disable CSS minification to debug the issue
}

export default nextConfig;
