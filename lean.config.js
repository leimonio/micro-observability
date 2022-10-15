/* eslint-disable @typescript-eslint/no-var-requires */
const { createReactWebpackConfig } = require("@leanjs/webpack-react");

module.exports = {
  devServer: { port: 33000 },
  selfHosted: {
    createRuntimePath: "@micro-observability/runtime-shared",
  },
  webpack: {
    react: createReactWebpackConfig()
  },
};
