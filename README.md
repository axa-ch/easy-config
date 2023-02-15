# myaxa-config

[![Build Status][ci-image]][ci-url]
[![MIT License][license-image]][license-url]

Opinionated set of eslint and prettier rules

# Installation

Notice that all the `myaxa-config` peer dependencies should be installed manually. For this reason we need to explicitly define their major version.

```shell
# Install the linting tools
npm i -D eslint@8 prettier@2

# Install the plugins used in myaxa-config
npm i -D eslint-config-airbnb-base@15 eslint-plugin-prettier@4 eslint-config-prettier@8 eslint-plugin-import@2

# Install this package directly from github
npm i -D axa-ch/myaxa-config
```

For Typescript support

```shell
npm i -D typescript@4 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5
```

These plugins assume a `tsconfig.json` file in your project root ([Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)).
<br/>
[See also our myaxa typescript setup](https://github.com/axa-ch/myaxa-config#typescript-setup)

## Optional IDE Configuration

- Install eslint in [your IDE](https://eslint.org/docs/user-guide/integrations)
- Install prettier in [your IDE](https://prettier.io/docs/en/editors.html)

# Eslint Setup

Set up your eslint config (`.eslintrc.js`) file as follows to enable the `myaxa-config` eslint rules in your project

```js
const { eslint } = require('@axa-ch/myaxa-config');

module.exports = {
  extends: [eslint.base],
};
```

To enable Typescript support, simply add the `eslint.typescript` settings to the extension list

```js
const { eslint } = require('@axa-ch/myaxa-config');

module.exports = {
  extends: [eslint.base, eslint.typescript],
};
```

# Prettier Setup

Set up your prettier config (`.prettierrc.js`) file as follows to enable the `myaxa-config` prettier rules in your project

```js
const { prettier } = require('@axa-ch/myaxa-config');

module.exports = prettier.base;
```

# React Setup

## Installation

For React projects we need to install the following two dependencies:

```shell
npm i -D eslint-plugin-react@7 eslint-plugin-react-hooks@4
```

## Eslint Setup

To enable linting for React/JSX files, you should add the following extension to your eslint config (`.eslintrc.js`) file:

```diff
const { eslint } = require('@axa-ch/myaxa-config')

module.exports = {
-  extends: [eslint.base],
+  extends: [eslint.base, eslint.react],
}
```

You don't need any specific plugins for Typescript support with React, just enable both configs in your `.eslintrc.js`.

```diff
const { eslint } = require('@axa-ch/myaxa-config')

module.exports = {
-  extends: [eslint.base],
+  extends: [eslint.base, eslint.react, eslint.typescript],
}
```

# Typescript Setup

Make sure to have Typescript installed in your project before proceeding with the following steps

```shell
npm i typescript@4
```

### Typescript Basic Config

To use the basic myaxa-config typescript config in your project you can set up your `.tsconfig.json` file as follows

```json
{
  "extends": "@axa-ch/myaxa-config/ts-config/base"
}
```

# Stylelint Setup

## Stylelint Installation

Make sure to have Stylelint installed in your project before proceeding with the following steps

```shell
npm i stylelint@14 stylelint-prettier@2 stylelint-config-prettier@9
```

### Stylelint Basic Rules Config

To use only the basic myaxa-config stylelint rules in your project you can set up your `.stylelintrc.js` file as follows

```js
const { stylelint } = require('@axa-ch/myaxa-config');

module.exports = {
  extends: [stylelint.base],
};
```

### Stylelint SCSS Config

Does your project use SCSS files? No problems... you can enable the myaxa-config stylelint rules for scss.
First you need to install the `stylelint-scss` dependency

```shell
npm i stylelint-scss@4 postcss-scss@4 postcss@8
```

You can then update your `.stylelintrc.js` file as follows

```diff
const { stylelint } = require('@axa-ch/myaxa-config');

module.exports = {
  extends: [
    stylelint.base,
+   stylelint.scss,
  ],
};
```

### Stylelint BEM Patterns Config

To make sure your classes will be properly named according to [BEM](http://getbem.com/), you might enable the myaxa-config bem pattern plugin.
First you need to install `stylelint-selector-bem-pattern`

```shell
npm i stylelint-selector-bem-pattern@2
```

You can then update your `.stylelintrc.js` file as follows

```diff
const { stylelint } = require('@axa-ch/myaxa-config');

module.exports = {
  extends: [
    stylelint.base,
    stylelint.scss,
+   stylelint.bemPattern,
  ],
};
```

### Stylelint Order Config

Do you care about the order of your css properties? In that case the myaxa-config `stylelint/config-order` is what you are looking for.
First install `stylelint-order`

```shell
npm i stylelint-order@6
```

Then update your `.stylelintrc.js` file as follows

```diff
const { stylelint } = require('@axa-ch/myaxa-config');

module.exports = {
  extends: [
    stylelint.base,
    stylelint.scss,
    stylelint.bemPattern,
+   stylelint.order,
  ],
};
```


### Release new Version of myaxa-config
```shell
npm version patch && git push --tags
```
[If you want to release a specific version of this package read the docs.](https://docs.npmjs.com/cli/v8/commands/npm-version)

[ci-image]: https://img.shields.io/github/actions/workflow/status/axa-ch/myaxa-config/ci.yml?style=flat-square&branch=main
[ci-url]: https://github.com/axa-ch/myaxa-config/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
