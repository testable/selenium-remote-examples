const WdioAssertionReporter = require('./utils/assertion-reporter');

exports.config = {
  specs: [
    "tests/test.simple.js"
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'Latest',
      'testable:options': {
        region: 'us-east-1',
        instanceType: 't3.medium',
        spotMaxPrice: '0.0416',
        vpc: 'vpc-3f23335a',
        subnet: 'subnet-9a107cb1',
        keyPair: 'agent',
        name: 'Chrome - All AWS Options',
        testCaseName: 'Remote Selenium Tests',
        scenarioName: 'Remote Selenium',
        reportId: `test-${Date.now()}`,
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
    timeout: 1500000
  }
}
