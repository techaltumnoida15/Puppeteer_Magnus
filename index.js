const cucumberJunitConvert = require('cucumber-junit-convert');

const optuins = {
    inputJsonFile: './cucumber_report.json',
    outputXmlFIle: './mWeb_OT_BVT.xml'
}

cucumberJunitConvert.convert(options)