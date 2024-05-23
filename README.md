# easy-config

[![Build Status][ci-image]][ci-url]
[![MIT License][license-image]][license-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]

Modern and strict configuration files to build consistently web applications.

# Table of content
1. [Getting Started](#getting-started)
   1. [Installation](#biome-installation)
   2. [Configuration](#biome-configuration)
   3. [IDE Integration](#biome-integration)
2. [Typescript Setup](#typescript-setup)
3. [Stylelint Setup](#stylelint-setup)
   1. [SCSS Setup]()
   2. [CSS Order Setup]()
   3. [BEM Pattern Setup]()

<a id='getting-started'></a>
# Getting started

## Installation
<a name='biome-installation'></a>
Start by installing [BiomeJS](https://biomejs.dev/) and `@axa-ch/easy-config`.
```shell
npm i -D --save-exact @biomejs/biome @axa-ch/easy-config
```
<a id='biome-configuration'></a>
## Configuration
Create a `biome.json` file at the root of your project

```json5
{
  "extends": ["./node_modules/@axa-ch/easy-config/biome/base.json"],
  // Other config...
}
```
You can configure this to your liking. [Follow the Configuration guide from biome](https://biomejs.dev/reference/configuration/)

<a id='biome-integration'></a>
## IDE Integration
Biome provides plugins for the most common IDEs:  
* IntelliJ-based products: [Biome](https://plugins.jetbrains.com/plugin/22761-biome)  
* VSCode Extension: [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) 

<a id='typescript-setup'></a>
# Typescript setup
Start by installing typescript:
```shell
npm i -D --save-exact typescript
```
Then, create a `tsconfig.json` file and extend `@axa-ch/easy-config`:

```json5
{
  "extends": ["@axa-ch/easy-config/ts-config/base"],
  // Other config...
}
```
<a id='stylelint-setup'></a>
# Stylelint setup
Start by installing stylelint and the rules used by easy-config:
```shell
npm i -D --save-exact stylelint stylelint-config-standard
```
Extend easy-config in the `.stylelintrc.js` file:
```js
import {stylelint} from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base]
}

```
## SCSS Setup
To use Stylelint with [SASS](https://sass-lang.com/), start by installing the SCSS default config for stylelint:
```shell
npm i -D --save-exact stylelint-config-standard-scss
```
Extend your stylelint configuration like shown below:
```js
import {stylelint} from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base, stylelint.scss]
}
```

## CSS Order Setup
You can install this extension if you want to ensure that CSS Properties are defined in a consistent way.

Start by installing the extension:
```shell
npm i -D --save-exact stylelint-order
```
Extend your stylelint configuration like shown below:
```js
import {stylelint} from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base, stylelint.order]
}
```

## CSS BEM Pattern
> [!WARNING]
> This extension is not working currently. It may be removed at any time

If you utilize the [BEM Pattern](https://getbem.com/) in your code, we would recommend using
this extension to check for incorrect usage of the BEM Pattern.

Start by installing this package:
```shell
npm i -D --save-exact stylelint-selector-bem-pattern
```

Extend your stylelint configuration like this:
```js
import {stylelint} from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base, stylelint.bemPattern]
}
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/axa-ch/easy-config/ci.yml?style=flat-square&branch=main
[ci-url]: https://github.com/axa-ch/easy-config/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: https://img.shields.io/npm/v/@axa-ch/easy-config.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/@axa-ch/easy-config.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@axa-ch/easy-config
