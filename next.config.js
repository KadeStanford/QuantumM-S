/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude 'fs', 'net', and 'dns' from being bundled in the client-side build
      config.node = {
        fs: "empty",
        net: "empty",
        dns: "empty",
      };
    }
    return config;
  },
};

module.exports = nextConfig;
