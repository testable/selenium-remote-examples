Selenium Remote Examples
------------------------

Example code for running a Selenium test against the Testable remote grid. Currently implemented with the <a target="_blank" href="https://webdriver.io">Webdriver.io</a> Selenium client library.

The examples include an `assertion-reporter.js` Webdriver.io reporter that reports the test steps back to Testable as assertions that can be seen along side the test results.

### Steps to Run

1. Set your API key: `export TESTABLE_KEY=xxx`. API keys can be generated by logging into Testable and going to Org Management => API Keys.
2. Run `npm install` to install any dependencies
3. Choose the example you want to run and use the embedded `wdio`. For example: `./node_modules/.bin/wdio 01-chrome-latest-shared-region.conf.js` to run the basic example.

In the future we will add more examples with other Selenium client libraries.
