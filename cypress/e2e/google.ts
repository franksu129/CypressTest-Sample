// cypress/e2e/google.ts
import { When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

When("I visit google.com", () => {
  cy.visit('https://google.com');
});

And("I type Cypress in the box", () => {
  cy.get('.gLFyf').type("CypressTest")
});

And("I click the search button", () => {
  cy.get('.CqAVzb > center > .gNO89b').click()
});

Then("I should see a search result page", () =>{
  cy.url().should('include', '/search')
});