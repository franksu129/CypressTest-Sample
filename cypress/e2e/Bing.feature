Feature: Bing.com
  Scenario: visiting the Bing and then use search
    When I visit www.bing.com
    And  I type Cypress in the box
    And I click the search button
    Then I should see a search result page