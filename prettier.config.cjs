'use strict'

const config = require('@github/prettier-config')

/** @type {import("prettier").Config} */
module.exports = {
  ...config,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
