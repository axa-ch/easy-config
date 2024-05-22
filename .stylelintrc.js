import { stylelint } from './index.js';

export default {
  extends: [stylelint.base, stylelint.scss, stylelint.bemPattern, stylelint.order],
};
