// cypress/e2e/google.ts
import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

When("I visit www.bing.com", () => {
  cy.visit('https://www.bing.com/');
});

And("I type Cypress in the box", () => {
  cy.get('#sb_form_q').type("CypressTest")
});

And("I click the search button", () => {
  cy.get('#search_icon').click()
});

Then("I should see a search result page", () =>{
  cy.url().should('include', '/searchHiHi')
});