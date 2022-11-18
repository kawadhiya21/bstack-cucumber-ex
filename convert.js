const cucumberJunitConvert = require('cucumber-junit-convert');

const options = {
    inputJsonFile: 'data.json',
    outputXmlFile: 'data.xml',
    featureNameAsClassName: true // default: false
}

cucumberJunitConvert.convert(options);
