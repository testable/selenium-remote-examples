const WDIOReporter = require('@wdio/reporter').default;

class WdioAssertionReporter extends WDIOReporter {
  constructor(options) {
    options = Object.assign(options, { stdout: true })
    super(options)
  }

  onTestStart(test) {
    browser.execute('testable:assertion:start', {
      suite: test.parent,
      name: test.title
    });
  }

  onTestPass(test) {
    this.write(`Test "${test.title}" passed!`);
    browser.execute('testable:assertion:finish', {
      suite: test.parent,
      name: test.title,
      state: 'passed'
    });
  }

  onTestFail(test) {
    this.write(`Test "${test.title}" failed: ${test.error.message}.`)
    browser.execute('testable:assertion:finish', {
      suite: test.parent,
      name: test.title,
      state: 'failed',
      errorType: test.error?.type || 'Error',
      error: test.error?.message,
      errorTrace: test.error?.stack
    });
    browser.execute('testable:fail', `Test failed due to failure in test step "${test.title}"`);
  }
}

module.exports = WdioAssertionReporter;
