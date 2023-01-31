const test = require('tape')
const fs = require('fs').promises
const prettier = require('prettier')

const api = require('../index')

test('Prettier React config', async (assert) => {
  const config = {
    ...api.prettier.base,
    filepath: 'tests/fixtures/react-valid.jsx',
  }

  const [rawValidVue, rawInvalidVue] = await Promise.all([
    fs.readFile('tests/fixtures/react-valid.jsx'),
    fs.readFile('tests/fixtures/react-invalid.jsx'),
  ])

  const prettierOkOnValidReact = prettier.check(rawValidVue.toString(), config)
  const prettierOkOnInvalidReact = prettier.check(
    rawInvalidVue.toString(),
    config,
  )
  assert.deepEqual(
    [prettierOkOnValidReact, prettierOkOnInvalidReact],
    [true, false],
    'Detects unformatted React components.',
  )
  assert.end()
})
