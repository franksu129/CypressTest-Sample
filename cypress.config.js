const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  video: false,
  e2e: {
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}","**/*.feature"],
    async setupNodeEvents(on, config) {

      const options = {
        webpackOptions: {
          resolve: {
            extensions: [".ts", ".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on("file:preprocessor", webpack(options));
  
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    }
  }
});