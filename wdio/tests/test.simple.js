const assert = require('assert');

require('../utils/assertion-reporter');

describe('A basic test', function() {
  it('should be possible to go to google', async function() {
    await browser.pause(20000);
    await browser.url('https://www.google.com');
    await browser.saveScreenshot('./google.png');
    await browser.pause(20000);
    const title = await browser.getTitle();
    assert.strictEqual(title, 'Google');
  });
});
