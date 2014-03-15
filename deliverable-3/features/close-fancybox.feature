Feature: User can close the fancyBox
  As a user
  I want to be able to close the fancyBox
  So that I can continue viewing the original site

  Scenario: Click close button
    Given an open fancyBox
    When I click the close button
    Then the fancyBox will close

  Scenario: Click overlay
    Given an open fancyBox
    When I click the semi-transparent overlay
    Then the fancyBox will close

  Scenario: Press escape key
    Given an open fancyBox
    When I press the escape key
    Then the fancyBox will close
