const puppeteer = require('puppeteer')
const helper = require('../helper/helper')
const utility = require('../helper/utility')
const {expect} = require('chai')
const {assert} = require('chai')
const config = require('config')


class PO_DemoGoogle{
    constructor() {}

    async enterSearcString(){
        await helper.typeText(page, '')
    }
}

module.exports = {PO_DemoGoogle:PO_DemoGoogle}