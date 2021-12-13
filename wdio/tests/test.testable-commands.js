const assert = require('assert');
require('../utils/assertion-reporter');

describe('A basic test', function () {
    it('should be possible to use all Testable commands', function () {

        // Write a log statement into the Testable test report log. Levels: error, info, debug.
        browser.execute('testable:log', 'info', 'Some information I want to capture');

        const start = Date.now();

        // Indicate that we are starting a test step. Will show as in progress on the test results
        // until testable:assertion:finish is called.
        browser.execute('testable:assertion:start', {
            suite: 'Streaming suite',
            name: 'Loading Google and sleeping a while'
        });

        browser.url('https://www.google.com');
        browser.pause(10000);

        // Indicate that we are finishing the test step.
        browser.execute('testable:assertion:finish', {
            state: 'passed',
            screenshot: true
        });

        // Any screenshots
        browser.saveScreenshot('./google.png');

        browser.execute('testable:metric', 'counter', {
            name: '# of Orders',
            val: 5,
            units: 'orders'
        });
        browser.execute('testable:metric', 'timing', {
            name: 'Order Execution Time',
            val: 534,
            units: 'ms'
        });
        browser.execute('testable:metric', 'histogram', {
            name: 'Orders By Type',
            key: 'Online',
            val: 5
        });
        browser.execute('testable:metric', 'metered', {
            name: 'Server Memory Usage',
            key: 'server-123',
            val: 34524232,
            units: 'bytes'
        });

        // Send an assertion that failed including error details
        browser.execute('testable:assertion', {
            suite: 'Example test suite',
            name: 'Load Google and check title',
            duration: Date.now() - start,
            state: 'failed',
            screenshot: true,
            errorType: 'TEST_ERROR',
            error: 'Demo error',
            errorTrace: 'More details about the demo error'
        });

        let title = browser.getTitle();

        // Mark the test as passing if the title is Google otherwise as a failure
        browser.execute(title === 'Google' ? 'testable:pass' : 'testable:fail');
    });
});
