exports.config = {
  specs: [
    "tests/test.*.js"
  ],
  capabilities: [
    {
      browserName: "chrome",
      browserVersion: "Latest",
      "testable:options": {
        region: "demo-agents",
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
