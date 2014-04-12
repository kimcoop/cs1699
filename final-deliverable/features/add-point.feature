Feature: Adding a Map Point
  As an authenticated user
  I want to be able to add and customize Map Points that appear on the Map Image
  So that I can display a particular instance of my travels
 
  Scenario: Set the title
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
    And I have satisfied the required fields
    When I enter the value "Test Point Title" in the input element "#title"
    And I click "#publish"
    Then "#message p" should contain "Map point published."
    And the value of "#title" should be "Test Point Title"