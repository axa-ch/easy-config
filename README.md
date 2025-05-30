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
Start by installing [BiomeJS](https://biomejs.dev/), [Prettier](https://prettier.io/) and `@axa-ch/easy-config`.

```shell
npm i -D --save-exact @biomejs/biome @axa-ch/easy-config prettier
```

<a id='biome-configuration'></a>

## Configuration

Create a `biome.json` file at the root of your project

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["./node_modules/@axa-ch/easy-config/biome/base.json"]
}
```

You can configure this to your
liking. [Follow the Configuration guide from biome](https://biomejs.dev/reference/configuration/).

To configure prettier, add a `.prettierrc.js` file with the following content:

```js
import { prettier } from '@axa-ch/easy-config';

export default prettier.base;
```

### Why not use `biome format`?

Biomes [formatting support](https://biomejs.dev/internals/language-support/) is currently not developed enough for us to
make the full move over to biome.
For instance, Biome currently doesn't support [CSS Formatting](https://github.com/biomejs/biome/issues/1285) or
Markdown.
Furthermore, Biome doesn't plan to support SCSS in the foreseeing future, so it makes sense to stick to prettier.

<a id='biome-integration'></a>

## IDE Integration

Biome provides plugins for the most common IDEs:

- IntelliJ-based products: [Biome](https://plugins.jetbrains.com/plugin/22761-biome)
- VSCode Extension: [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

### IntelliJ

When using IntelliJ, Biome and Prettier conflict when trying to run <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>
Shift</kbd>+<kbd>P</kbd>. This is because Biome is set to run `biome check` when pressing this shortcut, Prettier is set
up to format when this shortcut is used.
To avoid this conflict we would recommend Setting the prettier configuration to manual and then checking
the `Run on 'Reformat Code' action`. This way, you can press
<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd> to run Prettier. Alternatively, you can remap either of those commands to
different keystrokes.

![prettier-config](docs/prettier-config.png)

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

<a id='stylelint-scss'></a>

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
