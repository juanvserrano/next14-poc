const { CSSModuleRule } = require("@xo-union/util-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(CSSModuleRule());
    return config;
  },
};

module.exports = nextConfig;
