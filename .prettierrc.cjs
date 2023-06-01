/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  endOfLine: 'lf',
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 83,
  overrides: [
    {
      files: ['*.yml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.json'],
      options: {
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
  ],
}
