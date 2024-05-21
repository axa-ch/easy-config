export const typescript = (tsEslint, dirname) =>
  tsEslint.config(...tsEslint.configs.recommended, {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: dirname,
      },
    },
  });
