const test = require('tape')
const stylelint = require('stylelint')

const api = require('../index')

const isLintResultValid = ({ errored, warnings }) =>
  errored === false && warnings.length === 0

test('Stylelint SCSS BEM pattern config', async (assert) => {
  const { results } = await stylelint.lint({
    config: {
      extends: [
        api.stylelint.base,
        api.stylelint.scss,
        api.stylelint.bemPattern,
      ],
    },
    files: [
      'tests/fixtures/bem-pattern-valid.scss',
      'tests/fixtures/bem-pattern-invalid.scss',
    ],
  })

  const [validResult, invalidResult] = results
  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates BEM patterns in styles.',
  )
  assert.end()
})

test('Stylelint CSS BEM pattern config', async (assert) => {
  const { results } = await stylelint.lint({
    config: {
      extends: [api.stylelint.base, api.stylelint.bemPattern],
    },
    files: [
      'tests/fixtures/bem-pattern-valid.css',
      'tests/fixtures/bem-pattern-invalid.css',
    ],
  })

  const [validResult, invalidResult] = results
  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates BEM patterns in styles.',
  )
  assert.end()
})
