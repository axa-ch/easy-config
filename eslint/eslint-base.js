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
  },
};
