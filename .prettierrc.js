/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',

  plugins: [require.resolve('prettier-plugin-astro')],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
