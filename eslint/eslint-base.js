module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    // unresolved imports will be caught by our bundlers
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': ['error', 'unix'],
  },
};
