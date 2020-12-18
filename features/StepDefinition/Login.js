const {Given, Then, After, Before, BeforeAll, AfterAll, Status} = require('cucumer')
const {TestBase} = require('../PageObject/TestBase')
const _TestBase = new TestBase()
const utility = require('../helper/utility')
const fs = require('fs-extra')
const {setDefaultTimeout} = require('cucumber')

var appLogDir = ''
var screenshotDir = ''
var someDate = new Date()

Before(async function(testCase){
    var testCaseName = testCase.pickle.name
    setDefaultTimeout(120 * 1000)
    page = await _TestBase.launchBrowser(testCaseName)
});

After(async function(testCase){
    

});