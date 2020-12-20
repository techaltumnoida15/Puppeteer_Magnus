const utility = require('../helper/utility.js')

module.exports = {
    sleep: async function(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
    },

    enterURL: async function(page, url){
        await page.goto(url);
    },

    click: async function(page, selector){
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
        } catch (error) {
            throw new Error(`Unable to click on selector: ${selector}`)
        }
    },

    typeText: async function(page, text, selector){
        try {
            await page.waitForSelector(selector)
            await page.type(selector, text)
        } catch (error) {
            throw new Error(`Unable to type text on selector: ${selector}`)
        }
    }
}