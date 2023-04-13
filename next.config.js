// const { i18n } = import("next-i18n");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: 'es',
  },
  jsc: {
    transform: {
      react: {
        throwIfNamespace: false,
      },
    },
  },
}

module.exports = nextConfig
