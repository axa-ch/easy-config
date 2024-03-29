module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react-hooks'],
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
};
