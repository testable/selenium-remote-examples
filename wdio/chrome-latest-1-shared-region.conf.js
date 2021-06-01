exports.config = {
  specs: [
    "tests/test.simple.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "Latest-1",
      "testable:options": {
        region: "demo-agents",
        capturePerformance: true
      }
    }
  ],
  user: "webdriverio",
  key:  "ahoacuwsekigfckukffprclutcgkpnegksapym",
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
