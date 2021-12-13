const assert = require('assert');

require('../utils/assertion-reporter');

describe('A basic test', function() {
  it('should be possible to go to google', function() {
    browser.pause(2000);
    browser.url('https://www.google.com');
    browser.saveScreenshot('./google.png');
    const title = browser.getTitle();
    assert.strictEqual(title, 'Google');
  });
});
