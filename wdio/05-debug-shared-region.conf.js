const WdioAssertionReporter = require('./utils/assertion-reporter');

exports.config = {
  specs: [
    "tests/debug/test.debug.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "Latest",
      "testable:options": {
        region: "main-region",
        capturePerformance: true,
        reportId: `test-${Date.now()}`
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
