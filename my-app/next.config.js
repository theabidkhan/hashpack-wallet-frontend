/** @type {import('next').NextConfig} */
const path = require('path');
const webpack = require('webpack');
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      webpack: (config, { dev, isServer }) => {
        if(!dev && !isServer) {
          config.plugins.push(
            new webpack.IgnorePlugin({
              resourceRegExp: /^utf-8-validate$/,
              contextRegExp: /ws$/,
            })
          );
          config.plugins.push(
            new webpack.IgnorePlugin({
              resourceRegExp: /^bufferutil$/,
              contextRegExp: /ws$/,
            })
          );
        }
        return config;
      },
};

module.exports = nextConfig;
