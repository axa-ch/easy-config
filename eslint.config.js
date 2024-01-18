import path from 'node:path';
import { fileURLToPath } from 'url';
import { makeBase } from './eslint/eslint-base.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));
export default [
  ...makeBase(dirname),
  {
    ignores: ['dist/**', 'tests/**', 'prettier.config.js'],
  },
];
