const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {

      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
        charts: true,
        overwrite: false,
        html: false,
        json: true, 
        reportDir: 'cypress/reports',
        toConsole: true
      }  
  },
});

  
 