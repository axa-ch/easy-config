import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  reactRecommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-no-undef': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
