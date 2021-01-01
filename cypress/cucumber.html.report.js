const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/cucumber-json/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '87'
        },
        device: 'Local test machine',
        platform: {
            name: 'win64',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: Date().toString},
            {label: 'Execution End Time', value: Date().toString}
        ]
    }
});