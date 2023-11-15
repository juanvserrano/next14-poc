const { CSSModuleRule } = require("@xo-union/util-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push(CSSModuleRule());
    if (isServer) {
      config.node = {
        ...config.node,
        __dirname: true,
        __filename: true,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
