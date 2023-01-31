const test = require('tape')
const stylelint = require('stylelint')

const api = require('../index')

const isLintResultValid = ({ errored, warnings }) =>
  errored === false && warnings.length === 0

test('Stylelint Order config', async (assert) => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base, api.stylelint.order],
    },
    files: [
      'tests/fixtures/order-valid.css',
      'tests/fixtures/order-invalid.css',
    ],
  })
  const [validResult, invalidResult] = results

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, true],
    'Validates CSS property order.',
  )
  assert.end()
})
