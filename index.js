const eslintBase = require.resolve('./eslint/eslint-base')
const eslintTypescript = require.resolve('./eslint/eslint-typescript')
const eslintReact = require.resolve('./eslint/eslint-react')

const prettierBase = require('./prettier/prettier-base')

const stylelintBase = require.resolve('./stylelint/stylelint-base')
const stylelintScss = require.resolve('./stylelint/stylelint-scss')
const stylelintBemPattern = require.resolve('./stylelint/stylelint-bem-pattern')
const stylelintOrder = require.resolve('./stylelint/stylelint-order')

// Eslint rules
module.exports.eslint = {
  base: eslintBase,
  react: eslintReact,
  typescript: eslintTypescript,
}

// Stylelint rules
module.exports.prettier = {
  base: prettierBase,
}

// Stylelint rules
module.exports.stylelint = {
  base: stylelintBase,
  scss: stylelintScss,
  bemPattern: stylelintBemPattern,
  order: stylelintOrder,
}
