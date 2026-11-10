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
   1. [SCSS Setup](#stylelint-scss)
   2. [CSS Order Setup](#stylelint-order)

<a id='getting-started'></a>

# Getting started

## Installation

<a id='biome-installation'></a>
Start by installing [Biome](https://biomejs.dev/) and `@axa-ch/easy-config`.

```shell
npm i -D --save-exact @biomejs/biome @axa-ch/easy-config
```

<a id='biome-configuration'></a>

## Configuration

Create a `biome.json` file at the root of your project

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["./node_modules/@axa-ch/easy-config/biome/base.json"]
}
```

You can configure this to your liking. [Follow the Biome configuration guide](https://biomejs.dev/reference/configuration/).
The shared configuration enables Biome's linter and formatter for JavaScript, CSS, and SCSS.

Run checks and format files with Biome:

```shell
npx biome check .
npx biome format --write .
```

<a id='biome-integration'></a>

## IDE Integration

Biome provides plugins for the most common IDEs:

- IntelliJ-based products: [Biome](https://plugins.jetbrains.com/plugin/22761-biome)
- VSCode Extension: [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

### IntelliJ

Use the Biome IDE integration for linting and formatting. Configure your editor to run Biome's formatter on save if you
want files to be formatted automatically.

<a id='typescript-setup'></a>

# Typescript setup

Start by installing typescript:

```shell
npm i -D --save-exact typescript
```

Then, create a `tsconfig.json` file and extend `@axa-ch/easy-config`:

```json
{
  "extends": ["@axa-ch/easy-config/ts-config/base"]
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
import { stylelint } from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base],
};
```

a id='stylelint-scss'></a>

## SCSS Setup

To use Stylelint with [SASS](https://sass-lang.com/), start by installing the SCSS default config for stylelint:

```shell
npm i -D --save-exact stylelint-config-standard-scss
```

Extend your stylelint configuration like shown below:

```js
import { stylelint } from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base, stylelint.scss],
};
```

<a id='stylelint-order'></a>

## CSS Order Setup

You can install this extension if you want to ensure that CSS Properties are defined in a consistent way.

Start by installing the extension:

```shell
npm i -D --save-exact stylelint-order
```

Extend your stylelint configuration like shown below:

```js
import { stylelint } from '@axa-ch/easy-config';

/** @type {import('stylelint').Config} */
export default {
  extends: [stylelint.base, stylelint.order],
};
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/axa-ch/easy-config/ci.yml?style=flat-square&branch=main
[ci-url]: https://github.com/axa-ch/easy-config/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: https://img.shields.io/npm/v/@axa-ch/easy-config.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/@axa-ch/easy-config.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@axa-ch/easy-config
