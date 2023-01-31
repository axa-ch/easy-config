const namePattern = '[a-z]+([a-z0-9-]+[a-z0-9]+)?$'
const publicNamePattern = `^${namePattern}`
const privateNamePattern = `^[_]?${namePattern}`

module.exports = {
  plugins: ['stylelint-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    // `@`-else
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',

    // `@`-extend
    'scss/at-extend-no-missing-placeholder': true,

    // `@`-function
    // 'scss/at-function-named-arguments': 'always',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': publicNamePattern,

    // `@`-if
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // `@`-import
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    // 'scss/at-import-partial-extension-whitelist': [],

    // `@`-mixin
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    // 'scss/at-mixin-named-arguments': 'never',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': publicNamePattern,

    // `@`-rule
    'scss/at-rule-no-unknown': true,

    // `$`-variable
    // 'scss/dollar-variable-colon-newline-after': 'never',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    // 'scss/dollar-variable-default': null,
    // 'scss/dollar-variable-empty-line-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': privateNamePattern,

    // `%`-placeholder
    'scss/percent-placeholder-pattern': publicNamePattern,

    // `//`-comment
    // 'scss/double-slash-comment-empty-line-before': 'never',
    // 'scss/double-slash-comment-inline': 'never',
    // 'scss/double-slash-comment-whitespace-inside': 'never',

    // Declaration
    // 'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,

    // Media feature
    // 'scss/media-feature-value-dollar-variable': 'always',

    // Operator
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,

    // Partial
    // 'scss/partial-no-import': true,

    // Selector
    // 'selector-nest-combinators': 'always',
    // 'scss/selector-no-redundant-nesting-selector': true,

    // General / Sheet
    // 'scss/no-dollar-variables': 'always',
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInsideAtRules: ['if', 'mixin', 'function'],
      },
    ],
  },
}
