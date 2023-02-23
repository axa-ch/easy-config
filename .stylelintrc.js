const { stylelint } = require('./');

module.exports = {
  extends: [stylelint.base, stylelint.scss, stylelint.bemPattern, stylelint.order],
};
