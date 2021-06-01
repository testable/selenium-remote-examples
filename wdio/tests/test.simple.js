const assert = require('assert');

require('../utils/assertion-reporter');

describe('A basic test', function() {
   it('should be possible to go to google', function() {
       browser.url('https://www.google.com');
       browser.saveScreenshot('./google.png');
       var title = browser.getTitle();
       assert.strictEqual(title, 'Google');
   });
});
