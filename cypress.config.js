const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
  reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
  mochaJunitReporterReporterOptions: {
  mochaFile: 'cypress/reports/junit/results-[hash].xml'
  },
  cypressMochawesomeReporterReporterOptions: {
    charts: true,
    reportPageTitle: 'Relatório de testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
},
  chromeWebSecurity: false,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)

      
    },

  },
});




