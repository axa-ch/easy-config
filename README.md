# easy-config

[![Build Status][ci-image]][ci-url]
[![MIT License][license-image]][license-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]

Modern and strict configuration files to build consistently web applications.

# Installation

```shell
npm i @axa-ch/easy-config
```

Notice that all the `easy-config` peer dependencies should be installed manually. For this reason we need to explicitly define their major version.

```shell
# Install the linting tools
npm i -D eslint@8 prettier@3

# Install the plugins used in easy-config
npm i -D eslint-config-airbnb-base@15 eslint-plugin-prettier@5 eslint-config-prettier@9 eslint-plugin-import@2

# Install this package from npm
npm i -D axa-ch/easy-config
```

For Typescript support

```shell
npm i -D typescript@5 @typescript-eslint/eslint-plugin@6 @typescript-eslint/parser@6
```

These plugins assume a `tsconfig.json` file in your project root ([Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)).
<br/>
[See also our typescript setup](https://github.com/axa-ch/easy-config#typescript-setup)

## Optional IDE Configuration

- Install eslint in [your IDE](https://eslint.org/docs/user-guide/integrations)
- Install prettier in [your IDE](https://prettier.io/docs/en/editors.html)

# Eslint Setup

Set up your eslint config (`eslint.config.js`) file as follows to enable the `easy-config` eslint rules in your project

```js
import { eslint } from '@axa-ch/easy-config';

export default eslint.base;
```

To enable Typescript support, simply add the `eslint.typescript` settings to the extension list

```js
import { eslint } from '@axa-ch/easy-config';

export default [...eslint.base, ...eslint.typescript];
```

# Prettier Setup

Set up your prettier config (`prettier.config.js`) file as follows to enable the `easy-config` prettier rules in your project

```js
import { prettier } from '@axa-ch/easy-config';

export default prettier.base
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
import { eslint } from '@axa-ch/easy-config'

module.exports = {
-  extends: eslint.base,
+  extends: [...eslint.base, ...eslint.react],
}
```

You don't need any specific plugins for Typescript support with React, just enable both configs in your `.eslintrc.js`.

```diff
import { eslint } from '@axa-ch/easy-config'

module.exports = {
-  extends: eslint.base,
+  extends: [...eslint.base, ...eslint.react, ...eslint.typescript],
}
```

# Typescript Setup

Make sure to have Typescript installed in your project before proceeding with the following steps

```shell
npm i -D typescript@5
```

### Typescript Basic Config

To use the basic easy-config typescript config in your project you can set up your `.tsconfig.json` file as follows

```json
{
  "extends": "@axa-ch/easy-config/ts-config/base"
}
```

# Stylelint Setup

## Stylelint Installation

Make sure to have Stylelint installed in your project before proceeding with the following steps

```shell
npm i -D stylelint@15 stylelint-config-standard@34
```

### Stylelint Basic Rules Config

To use only the basic easy-config stylelint rules in your project you can set up your `stylelint.config.cjs` file as follows

```js
const { stylelint } = require('@axa-ch/easy-config');

module.exports = {
  extends: [stylelint.base],
};
```

### Stylelint SCSS Config

Does your project use SCSS files? No problems... you can enable the easy-config stylelint rules for scss.
First you need to install the `stylelint-config-standard-scss` dependency

```shell
npm i -D stylelint-config-standard-scss@10
```

You can then update your `stylelint.config.cjs` file as follows

```diff
const { stylelint } = require('@axa-ch/easy-config');

module.exports = {
  extends: [
    stylelint.base,
+   stylelint.scss,
  ],
};
```

### Stylelint BEM Patterns Config

To make sure your classes will be properly named according to [BEM](http://getbem.com/), you might enable the easy-config bem pattern plugin.
First you need to install `stylelint-selector-bem-pattern`

```shell
npm i -D stylelint-selector-bem-pattern@3
```

You can then update your `stylelint.config.cjs` file as follows

```diff
const { stylelint } = require('@axa-ch/easy-config');

module.exports = {
  extends: [
    stylelint.base,
    stylelint.scss,
+   stylelint.bemPattern,
  ],
};
```

### Stylelint Order Config

Do you care about the order of your css properties? In that case the easy-config `stylelint/config-order` is what you are looking for.
First install `stylelint-order`

```shell
npm i -D stylelint-order@6
```

Then update your `stylelint.config.cjs` file as follows

```diff
const { stylelint } = require('@axa-ch/easy-config');

module.exports = {
  extends: [
    stylelint.base,
    stylelint.scss,
    stylelint.bemPattern,
+   stylelint.order,
  ],
};
```

### Release new Version of easy-config

```shell
npm version patch && git push --tags
```

[If you want to release a specific version of this package read the docs.](https://docs.npmjs.com/cli/v8/commands/npm-version)

[ci-image]: https://img.shields.io/github/actions/workflow/status/axa-ch/easy-config/ci.yml?style=flat-square&branch=main
[ci-url]: https://github.com/axa-ch/easy-config/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: https://img.shields.io/npm/v/@axa-ch/easy-config.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/@axa-ch/easy-config.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@axa-ch/easy-config
