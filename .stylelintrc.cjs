module.exports = {
  extends: [
    "stylelint-config-standard-scss"
  ],
  rules: {
    "no-empty-source": null,
    "selector-class-pattern": null,

    // SCSS rules
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": "^([a-z][a-z0-9-]*)$"
  }
};
