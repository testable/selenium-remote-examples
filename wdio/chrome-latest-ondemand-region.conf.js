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
  user: "webdriverio",
  key:  "obbdhajivitekspkyrgdclsnfhylhacvumkkwx",
  hostname: "dev.testable.io",
  protocol: "https",
  port: 8088,
  path: "/wd/hub",
  logLevel: "trace",
  coloredLogs: true,
  framework: "mocha",
  waitforTimeout: 15000,
  connectionRetryTimeout: 1200000,
  mochaOpts: {
    ui: "bdd",
    timeout: 150000
  }
}
