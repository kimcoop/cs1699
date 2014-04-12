Feature: Adding a Map Point
  As an authenticated user
  I want to be able to add and customize Map Points that appear on the Map Image
  So that I can display a particular instance of my travels
 
  Scenario: Set the title
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
    And I have satisfied the required fields
    When I enter the value "Test Point Title" on the input element "#title"
    And I click "#publish"
    Then "#message p" should contain "Map point published."
    And the value of "#title" should be "Test Point Title"

  Scenario: Set the Map Point position
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
    And I have satisfied the required fields
    When I enter the value '{"x_percent":"0.5","y_percent":"0.5"}' on the input element "#acf-wtm_coord_percents input"
    And I click "#publish"
    Then "#message p" should contain "Map point published."
    And the value of "#acf-wtm_coord_percents input" should be '{"x_percent":"0.5","y_percent":"0.5"}'

  Scenario: Set the label background and point fill color
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
    And I have satisfied the required fields
    When I click on the second color swatch of "#acf-wtm_background_color .color-swatcher"
    And I click "#publish"
    Then "#message p" should contain "Map point published."
    And the second color swatch of "#acf-wtm_background_color .color-swatcher" should have the class "active"

  Scenario: Set the font color
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
    And I have satisfied the required fields
    When I click on the third color swatch of "#acf-wtm_font_color .color-swatcher"
    And I click "#publish"
    Then "#message p" should contain "Map point published."
    And the third color swatch of "#acf-wtm_font_color .color-swatcher" should have the class "active"

  Scenario: Set the page link
    Given I am on the page "/wp-admin/post-new.php?post_type=map_point"
    And I have satisfied the required fields
    When I enter the value "http://labs.amoscato.com/cs1699-wordpress/2014/04/alaska/" on the input element "#acf-field-wtm_url"
    And I click "#publish"
    Then "#message p" should contain "Map point published."
    And the value of "#acf-field-wtm_url" should be "http://labs.amoscato.com/cs1699-wordpress/2014/04/alaska/"
  