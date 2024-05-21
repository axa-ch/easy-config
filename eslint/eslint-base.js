export const makeBase = (eslintRecommended, prettierRecommended) => [
  eslintRecommended,
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-param-reassign': ['error', { props: false }],
      'linebreak-style': ['error', 'unix'],
    },
  },
];
