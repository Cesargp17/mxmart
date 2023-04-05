/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  jsc: {
    transform: {
      react: {
        throwIfNamespace: false,
      },
    },
  },
}

module.exports = nextConfig
