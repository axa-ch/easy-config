const test = require('tape')
const stylelint = require('stylelint')

const api = require('../index')

const isLintResultValid = ({ errored, warnings }) =>
  errored === false && warnings.length === 0

test('Stylelint base config', async (assert) => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base],
    },
    files: ['tests/fixtures/valid.css', 'tests/fixtures/invalid.css'],
  })
  const [validResult, invalidResult] = results

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, true],
    'The stylelint base config only disables rules, malformatted CSS should always pass.',
  )
  assert.end()
})
