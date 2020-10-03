const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    runtimeChunk: false,
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "excalidraw.js",
    library: "Excalidraw",
    libraryTarget: "umd",
  },
  entry: "./src/index-lib.js",
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
