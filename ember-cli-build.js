/* eslint-env node */

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const postcss = require('postcss');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    cssModules: {
      plugins: [
        postcss.plugin('expose-lint-results', () => (css, result) => {
          result.exportTokens.lintResults = result.messages;
        })
      ]
    }
  });

  return app.toTree();
};
