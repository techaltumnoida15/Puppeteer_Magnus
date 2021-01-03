const {Given, When, Then, After, Before} = require('cucumber')
const {expect, util} = require('chai')
const {assert} = require('chai')
const {TestBase} = require('../PageObject/TestBase')
const _TestBase = new TestBase()
const utility = require('../helper/utility')
const helper = require('../helper/helper')
const config = require('config')
const {PO_DemoGoogle} = require('../PageObject/PO_DemoGoogle')
const _PO_DemoGoogle = new PO_DemoGoogle()


Given('Google page is open', async function () {
  if(config.has('baseURL')){
    var baseUrl = config.get('baseURL')
    utility.writeLog(`Base URL = ` + baseUrl)
  }
  else{
    utility.writeLog(`Unable to get values from config.`)
  }
  // var appName = config.get("appName")
  // utility.writeLog('appName = ' + appName)

  await helper.enterURL(page, 'http://www.google.com')
  utility.writeLog(`Page is open and URL is entered.`)
  });


Given('User is on Google Page', async  function () {
   var pageTitle = await _PO_DemoGoogle.getPageTitle()
   utility.writeLog(`pageTitle is = ` + pageTitle)
   expect(pageTitle).to.equals('Google')
  });


Then('Enter some keyword to search', async function () {
    await _PO_DemoGoogle.enterSearcString('Java')
    utility.writeLog(`Search string is entered.`)
    await helper.sleep(8000)
  });

Then('Verify results', async function () {
    
  });