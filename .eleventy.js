// https://www.11ty.dev/docs/config
module.exports = function (eleventyConfig) {
  //eleventyConfig.addFilter('myFilter', function () {});

  return {
    dir: {
      input: 'templates',
      output: 'dist'
    }
  };
};
