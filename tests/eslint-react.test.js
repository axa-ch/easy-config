const test = require('tape')
const { ESLint } = require('eslint')

const api = require('../index')

const isLintResultValid = ({ errorCount, warningCount }) =>
  errorCount === 0 && warningCount === 0

test('ESLint React config', async (assert) => {
  const eslintReact = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [api.eslint.base, api.eslint.react],
      rules: {
        'prettier/prettier': ['error', api.prettier.base],
        'import/no-unresolved': 'off',
      },
    },
  })

  const [validResult, invalidResult] = await eslintReact.lintFiles([
    'tests/fixtures/react-valid.jsx',
    'tests/fixtures/react-invalid.jsx',
  ])

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates React components against the config.',
  )
  assert.end()
})
