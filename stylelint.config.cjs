const base = require('./stylelint/stylelint-base.cjs')
const scss = require('./stylelint/stylelint-scss.cjs')
const order = require('./stylelint/stylelint-order.cjs')
const bemPattern = require('./stylelint/stylelint-bem-pattern.cjs')

module .exports = {
  extends: [base, scss, bemPattern, order],
};
