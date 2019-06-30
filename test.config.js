console.log("TRAVIS: ", process.env.TRAVIS);
const config = {
  module: {
    rules: [
      {
        test: /\.(spec|test)\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /\.(spec|test)\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["istanbul"]
            }
          }
        ]
      }
    ]
  },
  mode: "development"
};

module.exports = config;
