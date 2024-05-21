export const react = (reactRecommended, globals) => ({
  ...reactRecommended,
  languageOptions: {
    ...reactRecommended.languageOptions,
    globals: {
      ...globals.browser,
    },
  },
});
