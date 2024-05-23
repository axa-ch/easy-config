import prettierBase from "./prettier/base.js";
import stylelintBase from "./stylelint/stylelint-base.js";
import stylelintOrder from "./stylelint/stylelint-order.js";
import stylelintScss from "./stylelint/stylelint-scss.js";
import tsConfigBase from "./ts-config/base.json" with { type: "json" };

// Stylelint rules
export const stylelint = {
  base: stylelintBase,
  scss: stylelintScss,
  order: stylelintOrder,
};

export const tsConfig = {
  base: tsConfigBase,
};

export const prettier = {
  base: prettierBase,
};
