module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["env", { targets: { browsers: ["last 2 versions"] } }],
            "stage-2",
            "react"
          ]
        }
      }
    ]
  }
};
