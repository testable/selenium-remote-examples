const WdioAssertionReporter = require('./utils/assertion-reporter');

exports.config = {
  specs: [
    "tests/openfin/test.*.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      "testable:options": {
        region: "aws-us-east-1",
        openfinConfigUrl: "https://raw.githubusercontent.com/testable/openfin-wdio-testable-example/master/app_sample.json"
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
  },
  maxInstances: 2
}
