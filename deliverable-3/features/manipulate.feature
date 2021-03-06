Feature: Web developer can manipulate a date
  As a web developer
  I want to be able to manipulate a date
  So that I can ...

  Scenario: Add 24 hours
    Given a valid reference to Moment.js
    Given today's date
    When I add 24 hours to the date
    Then I should see the original date plus one day

  Scenario: Subtract 24 hours
    Given a valid reference to Moment.js
    Given today's date
    When I subtract 24 hours from the date
    Then I should see the original date minus one day

  Scenario: Add 7 days
    Given a valid reference to Moment.js
    Given today's date
    When I add 7 days to the date
    Then I should see the date 7 days from now

  Scenario: Subtract 7 days
    Given a valid reference to Moment.js
    Given today's date
    When I subtract 7 days from the date
    Then I should see the date 7 days ago
