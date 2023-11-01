module.exports = {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': null,
    'no-duplicate-selectors': null,
    // this rule is deprecated and generate warnings in newer project setup
    'scss/at-import-no-partial-leading-underscore': null,
  },
};
