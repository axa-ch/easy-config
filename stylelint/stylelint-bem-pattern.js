module.exports = {
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'plugin/selector-bem-pattern': {
      implicitComponents: true,
      componentName: '^[a-z]+(?:-[a-z]+)*(--|__|$)?',
      componentSelectors(fileName, presetOptions) {
        const WORD = '([a-z]+(-[a-z]+)*)'
        const SCSS_INTERPOLATION = '(.*#{.*}.*)'

        const ns =
          presetOptions && presetOptions.namespace
            ? `${presetOptions.namespace}-`
            : ''

        const block = fileName.match(/^([a-z]+(-[a-z]+)*)+?/g)
        const element = `(?:__${WORD})?`
        const modifier = `(?:--${WORD})?`
        const attribute = '(?:\\[.+\\])?'
        const bemSelector = `(\\w)*(\\.${ns}${block}${element}${modifier}${attribute}|${SCSS_INTERPOLATION})*`
        return new RegExp(`^(${bemSelector})$`)
      },
      ignoreSelectors: ['\\.(u|trs)-([a-z]+(-[a-z]+)*)', '^(html|body|&)'],
    },
  },
}
