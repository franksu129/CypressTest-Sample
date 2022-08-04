const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor')
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {

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
      return config;
    },
  },
});
