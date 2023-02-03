module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'fp/no-class': 'off',
    'fp/no-delete': 'off',
    'fp/no-get-set': 'off',
    'fp/no-let': 'off',
    'fp/no-loops': 'off',
    'fp/no-mutating-assign': 'off',
    'fp/no-proxy': 'off',
  },
};
