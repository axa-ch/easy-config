import { stylelint } from './index.js';

/** @type {import('stylelint').Config} **/
export default {
  extends: [stylelint.base, stylelint.scss, stylelint.order],
};
