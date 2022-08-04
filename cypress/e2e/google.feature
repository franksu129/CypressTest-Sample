Feature: Google.com
  Scenario: visiting the google and then use search
    When I visit google.com
    And  I type Cypress in the box
    And I click the search button
    Then I should see a search result page