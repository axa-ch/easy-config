const test = require('tape');
const fs = require('fs').promises;
const prettier = require('prettier');

const api = require('../index');

test('Prettier CSS config', async (assert) => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/order-valid.css',
  };
  const [rawValidCSS, rawInvalidCSS] = await Promise.all([
    fs.readFile('tests/fixtures/order-valid.css'),
    fs.readFile('tests/fixtures/order-invalid.css'),
  ]);

  const prettierOkOnValidCSS = prettier.check(rawValidCSS.toString(), config);
  const prettierOkOnInvalidCSS = prettier.check(rawInvalidCSS.toString(), config);
  assert.deepEqual([prettierOkOnValidCSS, prettierOkOnInvalidCSS], [true, false], 'Detects unformatted CSS files.');
  assert.end();
});
