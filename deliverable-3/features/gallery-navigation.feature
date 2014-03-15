Feature: User can navigate through fancyBox gallery items
  As a User
  I want to be able to navigate through a fancyBox image gallery
  So that I can easily view the full-size version of each image

  Scenario:
    Given a valid fancyBox gallery and an open fancyBox
    When I press the left keyboard key
    Then the gallery should advance to the previous item in the gallery

  Scenario:
    Given a valid fancyBox gallery and an open fancyBox
    When I press the right keyboard key
    Then the gallery should advance to the next item in the gallery

  Scenario:
    Given a valid fancyBox gallery and an open fancyBox
    When I click the previous button
    Then the gallery should advance to the previous item in the gallery

  Scenario:
    Given a valid fancyBox gallery and an open fancyBox
    When I click the next button
    Then the gallery should advance to the next item in the gallery
