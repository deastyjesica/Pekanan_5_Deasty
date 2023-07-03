const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://kasirdemo.belajarqa.com/login",
    specPattern: "cypress/support/data/**/*.js",
    chromeWebSecurity: false
  },
});
