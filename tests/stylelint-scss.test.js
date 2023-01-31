const test = require('tape')
const stylelint = require('stylelint')

const api = require('../index')

const isLintResultValid = ({ errored, warnings }) =>
  errored === false && warnings.length === 0

test('Stylelint SCSS config', async (assert) => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base, api.stylelint.scss],
    },
    files: ['tests/fixtures/valid.scss', 'tests/fixtures/invalid.scss'],
  })
  const [validResult, invalidResult] = results
  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Matches SCSS files.',
  )
  assert.end()
})
