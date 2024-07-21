const { defineConfig } = require("cypress");
const cypress = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
require('dotenv').config()


module.exports = defineConfig({
  env: {...process.env},
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "**/*.feature",
    excludeSpecPattern: ["cypress/e2e/**/*.js"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    chromeWebSecurity: false
  },
});


