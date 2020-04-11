'use strict';

define("trivia-party/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("trivia-party/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('trivia-party/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'trivia-party/templates/application.hbs should pass TemplateLint.\n\ntrivia-party/templates/application.hbs\n  16:10  error  All `<img>` tags must have an alt attribute  require-valid-alt-text\n  17:10  error  All `<img>` tags must have an alt attribute  require-valid-alt-text\n  18:10  error  All `<img>` tags must have an alt attribute  require-valid-alt-text\n  33:10  error  All `<img>` tags must have an alt attribute  require-valid-alt-text\n  48:10  error  All `<img>` tags must have an alt attribute  require-valid-alt-text\n');
  });
});
define("trivia-party/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("trivia-party/tests/test-helper", ["trivia-party/app", "trivia-party/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('trivia-party/config/environment', [], function() {
  var prefix = 'trivia-party';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('trivia-party/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
