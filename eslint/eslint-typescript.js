module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Avoid to add the extensions for the ts and tsx files
    'import/extensions': [
      // default ealint-airbnb-config
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        // custom config due to a typescript setup
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
