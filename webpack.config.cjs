// webpack.config.js
module.exports = {
    // other webpack configurations...
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['react-svg-loader'],
        },
      ],
    },
  };
  