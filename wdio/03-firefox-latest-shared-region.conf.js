const WdioAssertionReporter = require('./utils/assertion-reporter');

const reportId = `test-${Date.now()}`;

exports.config = {
  specs: [
    "tests/test.simple.js"
  ],
  capabilities: [
    {
      browserName: "firefox",
      browserVersion: "Latest",
      "testable:options": {
        capturePerformance: true,
        reportId: reportId,
        deviceName: 'Android - Pixel 2 (411 x 731)',
        region: 'aws-us-east-1'
      }
    }
  ],
  reporters: [
    WdioAssertionReporter
  ],
  user: "user-to-log",
  key:  process.env.TESTABLE_KEY,
  hostname: "selenium.testable.io",
  protocol: "https",
  port: 443,
  path: "/wd/hub",
  logLevel: "info",
  coloredLogs: true,
  framework: "mocha",
  waitforTimeout: 15000,
  connectionRetryTimeout: 1200000,
  mochaOpts: {
    ui: "bdd",
    timeout: 1500000
  }
}
