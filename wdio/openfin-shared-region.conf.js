exports.config = {
  specs: [
    "tests/openfin/test.*.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      "testable:options": {
        region: "demo-agents",
        openfinConfigUrl: "https://raw.githubusercontent.com/testable/openfin-wdio-testable-example/master/app_sample.json",
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
  maxInstances: 2,
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