'use strict';

module.exports.plugins = [
  require('remark-preset-lint-recommended'),
  require('remark-preset-lint-consistent'),
  // require('remark-lint-blank-lines-1-0-2'), buggy
  // [require('remark-lint-code'), {
  //   js: 'remark-lint-code-eslint',
  // }],
  // require('remark-lint-no-empty-sections'),
  require('remark-lint-heading-whitespace'),
  require('remark-lint-no-url-trailing-slash'),
  require('remark-validate-links'),
  // require('lint-match-punctuation'), // doesn't work
];
