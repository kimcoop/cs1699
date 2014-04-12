Feature: Customizing the Map Image
  As an authenticated admin user
  I want to be able to customize the settings of the Map Image
  So that my map is displayed the way I like
 
  Scenario: Set the base image
    Given I am on the page "/wp-admin/admin.php?page=map-points-plugin"
      And I enter the value "http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/world.jpg" on the input element "#input-wtm-base-image"
      And I clear the value of the input element "#input-wtm-admin-image"
      And I submit the form ".form-wtm"
    When I visit the page "/wp-admin/post-new.php?post_type=map_point"
    Then I should see "http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/world.jpg" as the source of the element ".display-coords"

  Scenario: Set the admin image
    Given I am on the page "/wp-admin/admin.php?page=map-points-plugin"
      And I enter the value "http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/Blank_map_of_the_United_States.png" on the input element "#input-wtm-admin-image"
      And I submit the form ".form-wtm"
    When I visit the page "/wp-admin/post-new.php?post_type=map_point"
    Then I should see "http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/Blank_map_of_the_United_States.png" as the source of the element ".display-coords"
  
  Scenario: Set the color scheme
    Given I am on the page "/wp-admin/admin.php?page=map-points-plugin"
      And I enter the value "rgb(221,51,51)" on the input element "#wtm_primary_color"
      And I submit the form ".form-wtm"
    When I visit the page "/wp-admin/post-new.php?post_type=map_point"
    Then the CSS "background" property of the element "#acf-wtm_font_color .color-swatcher a:first-of-type" should be "rgb(221,51,51)"