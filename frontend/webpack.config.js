module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  module: {
    rules: [
     { test: /(\.tsx|\.ts)$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
