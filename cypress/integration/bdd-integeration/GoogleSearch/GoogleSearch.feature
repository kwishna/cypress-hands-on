Feature: Learning BDD Cucumber Integration With Cypress 

    Cypress With BDD Cucumber Is Cool
    @skip
    Scenario: First Cucumber-Cypress Integration
    
    Given I navigate to https://www.duckduckgo.com
    When I enter some value in search box
    And I hit search button
    Then I verify search result count

    Scenario: Second Cucumber-Cypress Integration
    
    Given I navigate to https://www.duckduckgo.com
    When I enter some value using datatable
    | value |
    | krishna |