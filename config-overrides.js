module.exports = function override(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
      enforce: 'pre',
      loader: 'source-map-loader',
      options: {
        filterSourceMappingUrl: (url, resourcePath) => !/bootstrap.css.map$/.test(url),
      },
    });
    return config;
  };
  