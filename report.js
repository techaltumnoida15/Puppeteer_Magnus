const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'cucumber_report.html',
    //output: 'cucumber_report.xml',
    reportSuiteAsScenario: true,
    scenarioTimestamp: true,
    launchReport: true
}

reporter.generate(options)