const WdioAssertionReporter = require('./utils/assertion-reporter');

exports.config = {
  specs: [
    "tests/test.*.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "Latest",
      "testable:options": {
        region: "aws-us-east-1",
        capturePerformance: true,
        captureWebSocketPerformance: true,
        logs: "all",
        recordVideo: true,
        deviceName: "Desktop 1280 x 1024",
        testCaseName: "Remote Selenium Tests",
        scenarioName: "Remote Selenium",
        testConfigurationName: "Chrome - Desktop 1280 x 1024",
        "tags": "Remote,Wdio",
        "reportId": `test-${Date.now()}`
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
