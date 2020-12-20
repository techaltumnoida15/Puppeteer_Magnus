const puppeteer = require('puppeteer')
const helper = require('../helper/helper')
const utility = require('../helper/utility')
const {expect} = require('chai')
const {assert} = require('chai')
const config = require('config')


class PO_DemoGoogle{
    constructor() {}

    async enterSearcString(searchString){
        await helper.typeText(page, searchString, 'input[name="q"]')
    }

    async getPageTitle(){
        var pageTitle = await page.title()
        return pageTitle
    }
}

module.exports = {PO_DemoGoogle:PO_DemoGoogle}