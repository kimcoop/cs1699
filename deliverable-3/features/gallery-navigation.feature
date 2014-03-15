Feature: User can navigate through fancyBox gallery items
  As a user
  I want to be able to navigate through a fancyBox image gallery
  So that I can easily view the full-size version of each image

  Scenario: Press left keyboard key
    Given a valid fancyBox gallery
    And an open fancyBox
    When I press the left arrow keyboard key
    Then the fancyBox should advance to the previous item in the gallery

  Scenario: Press right keyboard key
    Given a valid fancyBox gallery
    And an open fancyBox
    When I press the right arrow keyboard key
    Then the fancyBox should advance to the next item in the gallery

  Scenario: Click previous button
    Given a valid fancyBox gallery
    And an open fancyBox
    When I click the previous button
    Then the fancyBox should advance to the previous item in the gallery

  Scenario: Click next button
    Given a valid fancyBox gallery
    And an open fancyBox
    When I click the next button
    Then the fancyBox should advance to the next item in the gallery
