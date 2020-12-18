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
            headless: true,
            slowMo: 50,
            timeout: (80 * 100),
            args: ['--start-maximize'],
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
        await global.page.close()
        await utility.writeLog(`Test Case ****** ` + testCaseName + `***** Finished`)
    }

    async returnPage(){
        return global.page
    }
}

module.exports = {TestBase:TestBase}