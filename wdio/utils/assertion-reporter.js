beforeEach(function() {
    browser.execute('testable:assertion:start', {
        suite: this.currentTest?.parent?.title,
        name: this.currentTest?.title
    });
});

afterEach(function() {
    browser.execute('testable:assertion:finish', {
        state: this.currentTest.state,
        duration: this.currentTest.duration
    });
});