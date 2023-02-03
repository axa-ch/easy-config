const test = require('tape')
const { ESLint } = require('eslint')

const api = require('../index')

const isLintResultValid = ({ errorCount, warningCount }) =>
  errorCount === 0 && warningCount === 0

test('ESLint Typescript React config', async (assert) => {
  const eslint = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [api.eslint.react, api.eslint.typescript],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
        'no-use-before-define': 'off',
      },
    },
  })
  const [validResult, invalidResult] = await eslint.lintFiles([
    'tests/fixtures/react-valid-ts.tsx',
    'tests/fixtures/react-invalid-ts.tsx',
  ])

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates js files against the config.',
  )
  assert.end()
})
