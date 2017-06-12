/* eslint-env node */
'use strict';

const Plugin = require('ember-css-modules/lib/plugin');

module.exports = {
  name: 'ember-css-modules-stylelint',

  createCssModulesPlugin(parent) {
    return new StylelintPlugin(parent);
  }
};

class StylelintPlugin extends Plugin {
  config(env, baseConfig) {
    this.addPostcssPlugin(baseConfig, 'before', require('stylelint'));
  }
}
