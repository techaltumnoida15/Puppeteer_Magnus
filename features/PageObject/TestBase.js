const puppeteer = require('puppeteer')
const helper = require('../helper/helper')
const utility = require('../helper/utility')
const {expect} = require('chai')
const {assert} = require('chai')
const config = require('config')

class TestBase{
    constructor() {}

    async launchBrowser(testCaseName){
        await utility.writeLog(`Test Case ****** ` + testCaseName + `***** Started`)

        global.browser = await puppeteer.launch({
            headless: false,
            slowMo: 50,
            devtools: false,
            timeout: (80 * 100),
            args: ['--start-maximized'],
            defaultViewport: null,
            // defaultViewport: {
            //     width: 1522,
            //     height: 725,
            //     isMobile: false
            // }
        });
        global.page = (await global.browser.pages())[0]
        return global.page
    }

    async closeBrowser(testCaseName){
        await global.browser.close()
        await utility.writeLog(`Test Case ****** ` + testCaseName + `***** Finished`)
    }

    async returnPage(){
        return global.page
    }
}

module.exports = {TestBase:TestBase}