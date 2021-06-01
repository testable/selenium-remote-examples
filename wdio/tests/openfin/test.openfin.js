/**
 *
 * Example test script for Hello OpenFin App using Mocha, CHAI and WebdriverIO (https://webdriver.io)
 *
 */

 "use strict";

 const should = require('chai').should();
 
 require('../../utils/assertion-reporter');
 
 describe('Hello OpenFin App testing with webdriver.io', function() {
     let notificationButton, cpuInfoButton, cpuInfoExitButton;
 
     /**
      * Select the window with specified title
      * @param windowTitle window title
      */
     function switchWindowByTitle(windowTitle) {
         browser.switchWindow(windowTitle);
     }
 
 
     /**
      *  Check if OpenFin Javascript API fin.desktop.System.getVersion exits
      *
     **/
     function checkFinGetVersion() {
         const result = browser.executeAsync(function (done) {
             if (fin && fin.desktop && fin.desktop.System && fin.desktop.System.getVersion) {
                 done(true);
             } else {
                 done(false);
             }
         });
         return result;
     }
 
     /**
      *  Wait for OpenFin Javascript API to be injected 
      *
     **/
     function waitForFinDesktop() {
         const ready = checkFinGetVersion();
         if (!ready) {
             browser.pause(1000);
             waitForFinDesktop();               
         }
     }
 
     it('Switch to Hello OpenFin Main window', () => {
         switchWindowByTitle("Hello OpenFin");
         browser.saveScreenshot('./main.png');
     });
 
     it('Wait for OpenFin API ready', () => {
         waitForFinDesktop();
     });
 
     it("Find notification button", () => {
         const result = $("#desktop-notification");
         should.exist(result);
         notificationButton = result;
     });
 
     it("Click notification button", () => {
         should.exist(notificationButton);
         notificationButton.click();
     });
 
 
     it("Find CPU Info button", () => {
         const result = $("#cpu-info");
         should.exist(result);
         cpuInfoButton = result;
     });
 
     it("Click CPU Info button", () => {
         should.exist(cpuInfoButton);
         const result = cpuInfoButton.click();
         browser.pause(3000); // pause just for demo purpose so we can see the window
     });
 
 
     it('Switch to CPU Info window', () => {
         switchWindowByTitle("Hello OpenFin CPU Info");
         browser.saveScreenshot('./cpu.png');
     });
 
 
     it("Find Exit button for CPU Info window", () => {
         const result = $("#close-app");
         should.exist(result);
         cpuInfoExitButton = result;
     });
 
     it("Click CPU Info Exit button", () => {
         should.exist(cpuInfoExitButton);
         cpuInfoExitButton.click();
     });
 
     it('Exit OpenFin Runtime', () => {
         browser.execute(function () {
             fin.desktop.System.exit();
         });
         browser.pause(1000); // pause here to give Runtime time to exit
     });
 
 });