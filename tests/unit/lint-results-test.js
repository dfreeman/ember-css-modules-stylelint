import { module, test } from 'qunit';
import styles from 'dummy/styles/app';

module('Unit | lint results');

test('warnings are exposed on the PostCSS result object', function(assert) {
  // See ember-cli-build.js — we just glue the lint output to the styles hash to get it into the build easily
  const result = styles.lintResults[0];

  assert.equal(styles.lintResults.length, 1);
  assert.equal(result.rule, 'color-no-invalid-hex');
  assert.equal(result.line, 2);
  assert.equal(result.column, 10);
});
