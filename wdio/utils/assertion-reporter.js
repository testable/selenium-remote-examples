beforeEach(function() {
    /*browser.execute('testable:assertion:start', {
        suite: this.currentTest?.parent?.title,
        name: this.currentTest?.title
    });*/
});

afterEach(function() {
    browser.execute('testable:assertion', {
        suite: this.currentTest?.parent?.title,
        name: this.currentTest?.title,
        state: this.currentTest.state,
        duration: this.currentTest.duration
    });
});