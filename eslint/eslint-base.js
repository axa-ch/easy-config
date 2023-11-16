export default {
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
    // file imports will be resolved by bundlers we don't need to check the import extensions
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'linebreak-style': ['error', 'unix'],
  },
};
