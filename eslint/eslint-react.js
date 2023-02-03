module.exports = {
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-undef': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/react-in-jsx-scope': 0,
    // 'react/jsx-uses-react': 0,
    // 'import/extensions': 0,
    // singleAttributePerLine: 2,
    // semi: 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
}
