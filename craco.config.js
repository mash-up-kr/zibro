const { pickBy } = require('lodash/fp');

const alias = {
  // 'react-dom': process.env.NODE_ENV === 'development' && '@hot-loader/react-dom',
};

module.exports = () => ({
  webpack: {
    alias: pickBy(Boolean, alias),
  },
  babel: {
    plugins: ['react-hot-loader/babel'],
  },
});
