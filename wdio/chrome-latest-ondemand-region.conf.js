const WdioAssertionReporter = require('./utils/assertion-reporter');

exports.config = {
  specs: [
    "tests/test.testable-commands.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "Latest",
      "testable:options": {
        region: "us-east-1",
        capturePerformance: true
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
    timeout: 150000
  }
}
