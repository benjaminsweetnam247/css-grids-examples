module.exports = {
  plugins: {
    // 'precss': {},
    // 'autoprefixer': {},
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 10 versions', '> 5%'],
    },
    // 'cssnano': {},
    'postcss-reporter': {},
  },
};
