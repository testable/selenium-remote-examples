exports.config = {
    specs: [
        "tests/test.*.js"
    ],
    capabilities: [
        {
            browserName: 'chrome',
            browserVersion: 'Latest',
            'testable:options': {
                source: 'My Azure',
                region: 'eastus',
                capturePerformance: true,
                captureWebSocketPerformance: true,
                instanceType: 'Standard_A2_v2',
                spotMaxPrice: '0.0716',
                resourceGroup: 'testable_eastus',
                network: 'testable-vnet-eastus',
                subnet: 'agents',
                name: 'Chrome - All Azure Options',
                testCaseName: 'Remote Selenium Tests',
                scenarioName: 'Remote Selenium',
                reportId: `test-${Date.now()}`
            }
        }
    ],
    user: "webdriverio",
    key: "obbdhajivitekspkyrgdclsnfhylhacvumkkwx",
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
        timeout: 3000000
    }
}
