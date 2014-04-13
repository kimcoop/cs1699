Feature: Viewing Map Points on the Image Map
  As a content viewer
  I want to be able to view published Map Points in their respective position on the Image Map
  So that I can quickly visualize geographic distribution and click on appropriate links
 
  Scenario: Embed map on page
    Given I am on the page "/wp-admin/post.php?post=2&action=edit"
    And I click "#content-html"
    When I enter the value "[map_points]" on the input element "#wp-content-editor-container .wp-editor-area"
    And I click "#publish"
    And I click "#view-post-btn a"
    Then ".entry-content .wtm" should exist
