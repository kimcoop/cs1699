Feature: Viewing Map Points on the Image Map
  As a content viewer
  I want to be able to view published Map Points in their respective positions on the Image Map
  So that I can quickly visualize geographic distribution and click on appropriate links
 
  Scenario: Embed map on page
    Given I am on the page "%%edit_travel_page"
    When I click "#content-html"
      And I enter the value "[map_points]" on the input element "#wp-content-editor-container .wp-editor-area"
      And I click "#publish"
      And I click "#view-post-btn a"
    Then ".entry-content .wtm" should exist

  Scenario: Hover over map point
    Given I am on the page "%%view_travel_page" and at least one travel point exists
    When I hover over the element "point-dot:first-of-type"
    Then the CSS "display" property of the element "point-dot:first-of-type +  .point-title" should not be "none"
