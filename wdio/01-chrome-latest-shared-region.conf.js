const WdioAssertionReporter = require('./utils/assertion-reporter');

exports.config = {
  specs: [
    "tests/test.devtools.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "Latest",
      "testable:options": {
        region: "aws-us-east-1",
        reportId: `test-${Date.now()}`,
        seleniumVersion: '4.x'
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
