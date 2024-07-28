/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  plugins: [
    {   // 修改antd主题
      plugin: CracoLessPlugin,
      Options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    },
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
}