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
     async function switchWindowByTitle(windowTitle) {
        await browser.switchWindow(windowTitle);
     }


     /**
      *  Check if OpenFin Javascript API fin.desktop.System.getVersion exits
      *
     **/
     async function checkFinGetVersion() {
         const result = await browser.executeAsync(function (done) {
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
     async function waitForFinDesktop() {
         const ready = await checkFinGetVersion();
         if (!ready) {
             await browser.pause(1000);
             await waitForFinDesktop();
         }
     }

     it('Switch to Hello OpenFin Main window', async () => {
         await switchWindowByTitle("Hello OpenFin");
         await browser.saveScreenshot('./main.png');
     });

     it('Wait for OpenFin API ready', async () => {
         await waitForFinDesktop();
     });

     it("Find notification button", async () => {
         const result = await $("#desktop-notification");
         should.exist(result);
         notificationButton = result;
     });

     it("Click notification button", async () => {
         should.exist(notificationButton);
         await notificationButton.click();
     });


     it("Find CPU Info button", async () => {
         const result = await $("#cpu-info");
         should.exist(result);
         cpuInfoButton = result;
     });

     it("Click CPU Info button", async () => {
         should.exist(cpuInfoButton);
         await cpuInfoButton.click();
         browser.pause(3000); // pause just for demo purpose so we can see the window
     });


     it('Switch to CPU Info window', async () => {
         await switchWindowByTitle("Hello OpenFin CPU Info");
         await browser.saveScreenshot('./cpu.png');
     });


     it("Find Exit button for CPU Info window", async () => {
         const result = await $("#close-app");
         should.exist(result);
         cpuInfoExitButton = result;
     });

     it("Click CPU Info Exit button", async () => {
         should.exist(cpuInfoExitButton);
         await cpuInfoExitButton.click();
     });

     it('Exit OpenFin Runtime', async () => {
         await browser.execute(function () {
             fin.desktop.System.exit();
         });
         await browser.pause(1000); // pause here to give Runtime time to exit
     });

 });
