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

  Scenario: Add point to map
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
      And I have satisfied the required fields
      And I click "#publish"
    When I visit the page "%%view_travel_page"
    Then ".wtm-points li.point-container" should exist
