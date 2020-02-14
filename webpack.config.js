const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "client/index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
