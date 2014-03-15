Feature: User can close the fancyBox
  As a User
  I want to be able to close the fancyBox
  So that I can continue viewing the original site

  Scenario:
    Given an open fancyBox
    When I click the close button
    Then the fancyBox will close

  Scenario:
    Given an open fancyBox
    When I click the semi-transparent overlay
    Then the fancyBox will close

  Scenario:
    Given an open fancyBox
    When I press the escape key
    Then the fancyBox will close
