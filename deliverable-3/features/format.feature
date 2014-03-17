Feature: Web developer can format a date
  As a web developer
  I want to be able to format a date
  So that my users will readily understand the date's timeline

  Scenario: Format year, 2-digit month and 2-digit day
    Given a valid reference to Moment.js
    And today's date
    When I pass in the format string "YYYY MM DD"
    Then I should see a string containing today's year, today's 2-digit month, and today's 2-digit day

  Scenario: Format month and day
    Given a valid reference to Moment.js
    And today's date
    When I pass in the format string "M D"
    Then I should see a string containing today's month and today's day

  Scenario: Format 2-digit month, 2-digit day and 24-hour time
    Given a valid reference to Moment.js
    And today's date
    When I pass in the format string "MM DD H:mm"
    Then I should see a string containing today's 2-digit month, today's 2-digit day, and today's 24-hour time
