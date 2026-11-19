const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: ".", // output.path（dist）直下にコピー
	  globOptions: {
            ignore: ['**/index.html'], // public直下なら '**/index.html' または 'index.html'
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "My App",
      template: `${__dirname}/public/index.html`,
      siteUrl: "https://rakugaki.torahappy.org"
    }),
  ],
};
