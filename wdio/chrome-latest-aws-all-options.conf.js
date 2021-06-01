exports.config = {
  specs: [
    "tests/test.*.js"
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'Latest',
      'testable:options': {
        source: 'My AWS Account',
        region: 'us-east-1',
        instanceType: 't3.medium',
        spotMaxPrice: '0.0416',
        vpc: 'vpc-3f23335a',
        subnet: 'subnet-9a107cb1',
        keyPair: 'agent',
        elasticIps: '54.80.161.98,34.231.178.166,52.23.37.223',
        name: 'Chrome - All AWS Options',
        testCaseName: 'Remote Selenium Tests',
        scenarioName: 'Remote Selenium',
        reportId: `test-${Date.now()}`
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
