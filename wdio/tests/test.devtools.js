const assert = require('assert');

require('../utils/assertion-reporter');

describe('A basic test', function() {
  it('should go to google + testable (via CDP)', async function() {
    await browser.url('https://www.google.com');
    await browser.saveScreenshot('./google.png');
    const puppeteerBrowser = await browser.getPuppeteer();
    // switch to Puppeteer
    const page = (await puppeteerBrowser.pages())[0];
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://testable.io/');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: './testable.png' });

    await browser.pause(2000);
    const title = await browser.getTitle();
    assert.strictEqual(title, 'Testable');
  });
});
