/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/videos/[name].[hash][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
