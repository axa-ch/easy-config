import { FlatCompat } from '@eslint/eslintrc';

export const makeCompat = (dirname) =>
  new FlatCompat({
    baseDirectory: dirname,
  });
