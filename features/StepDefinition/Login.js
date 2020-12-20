const {Given, Then, After, Before, BeforeAll, AfterAll, Status} = require('cucumber')
const {TestBase} = require('../PageObject/TestBase')
const _TestBase = new TestBase()
const utility = require('../helper/utility')
const fs = require('fs-extra')
const {setDefaultTimeout} = require('cucumber')

var appLogDir = ''
var screenshotDir = ''
var someDate = new Date()
const month = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sept", "Oct", "Nov", "Dec"]

BeforeAll(async function(){
    setDefaultTimeout(30* 1000)
    var dir = './Result//' + 'MagnusResult_' + someDate.getDate() + month[someDate.getMonth()] + someDate.getFullYear() + '_' + someDate.getHours().toString() + 'hh' + someDate.getMinutes().toString() + 'mm' + someDate.getSeconds().toString() + 'ss'

    if(!fs.existsSync(dir)){
        fs.removeSync(dir)
        fs.mkdirSync(dir)
    }

    appLogDir = dir + '//AppLog//'
    if(!fs.existsSync(appLogDir)){
        fs.removeSync(appLogDir)
        fs.mkdirSync(appLogDir)
    }

    screenshotDir = dir + '//Screenshots//'
    if(!fs.existsSync(screenshotDir)){
        fs.removeSync(screenshotDir)
        fs.mkdirSync(screenshotDir)
    }
});

Before(async function(testCase){
    setDefaultTimeout(120 * 1000)
    
    var testCaseName = testCase.pickle.name
    //page = await _TestBase.launchBrowser(testCaseName)

    var fileName = appLogDir + testCaseName + '.txt'

    global.logger = fs.createWriteStream(fileName, {flag: 'a'})
    page = await _TestBase.launchBrowser(testCaseName)
});

After(async function(testCase){
    var testCaseName = testCase.pickle.name

    if(testCase.result.status === Status.FAILED){
        utility.writeLog(`Test case failed.`)
        var fileName = screenshotDir + testCaseName + '.jpeg'
        await global.page.screenshot({path: fileName, type: 'jpeg', fullPage: true})
    }
    else{
        utility.writeLog(`Test case passed.`)
    }
    return _TestBase.closeBrowser(testCaseName)
});

AfterAll(async function(){
    utility.closeLogger()
});