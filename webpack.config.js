const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const { NODE_ENV } = process.env;

module.exports = {
  // 开发模式
  mode: NODE_ENV,

  // 入口
  entry: path.join(__dirname, "./src/index.tsx"),

  // 出口
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "main.js",
  },
  // 打包优化
  optimization: {
    usedExports: true,
  },

  // 配置loader加载器
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },

  // 插件
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],

  //webpack-dev-server 的配置信息
  devServer: {
    open: true,
    port: 3000,
  },
};
