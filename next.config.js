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
        destination: "https://github.com/pseudonaut/app",
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;
