Feature: Web developer can compare two dates
  As a web developer
  I want to be able to compare two dates
  So that I can know when the dates occurred in relationship to each other

  Scenario: 
    Given a valid reference to Moment.js
    And today's date
    And a date 1 year ago
    When I compare the dates
    Then it should indicate that the first date is after the second date

  Scenario: 
    Given a valid reference to Moment.js
    And today's date
    And a tomorrow's date
    When I compare the dates
    Then it should indicate that the first date is before the second date

  Scenario: 
    Given a valid reference to Moment.js
    And today's date
    And today's date
    When I compare the dates
    Then it should indicate that the first date is the same as the second date
