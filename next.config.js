const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com", "avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true, layers: true };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Solidity-Nirvana",
        permanent: false,
      },
    ];
  },
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['en-US', 'fr', 'nl-NL'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'en-US',
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   domains: [
  //     {
  //       domain: 'example.com',
  //       defaultLocale: 'en-US',
  //     },
  //     {
  //       domain: 'example.nl',
  //       defaultLocale: 'nl-NL',
  //     },
  //     {
  //       domain: 'example.fr',
  //       defaultLocale: 'en-US',
  //       // an optional http field can also be used to test
  //       // locale domains locally with http instead of https
  //       http: true,
  //     },
  //   ],
  // },
};

module.exports = withNextIntl(nextConfig);
