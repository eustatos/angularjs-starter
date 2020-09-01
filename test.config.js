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
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  mode: "development"
};

module.exports = config;
