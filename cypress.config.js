const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.thomann.de/pl",
    includeShadowDom: true,
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
