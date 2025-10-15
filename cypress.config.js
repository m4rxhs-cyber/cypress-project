const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://erickwendel.github.io/vanilla-js-web-app-example/",
    setupNodeEvents(on, config) {
      // eventos padrão do Cypress (se quiser adicionar)
      return config;
    },
    testIsolation: false
  },
});
