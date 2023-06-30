/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = withPlugins([
  // [optimizedImages],
  // Other plugins you may have...
], {
  webpack: (config, { isServer }) => {
    // Add a rule to handle shader files with the raw-loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });

    if (!isServer) {
      // Preventing raw-loader from being applied to server-side bundles
      config.resolve.fallback.fs = false;
    }

    return config;
  },
});