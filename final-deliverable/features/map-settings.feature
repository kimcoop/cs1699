Feature: Customizing the Map Image
  As an authenticated admin user
  I want to be able to customize the settings of the Map Image
  So that my map is displayed the way I like
 
  Scenario: Set the base image
    Given I am on the page "http://localhost:8888/wp-admin/admin.php?page=map-points-plugin"
      And I enter the value "http://localhost:8888/wp-content/uploads/2014/04/map.jpg" on the base image input element "#input-wtm-base-image"
      And I clear the value of the input element "#input-wtm-admin-image"
      And I submit the form ".form-wtm"
    When I visit the page "http://localhost:8888/wp-admin/post-new.php?post_type=map_point"
    Then I should see "http://localhost:8888/wp-content/uploads/2014/04/map.jpg" as the source of the element ".display-coords"

  Scenario: Set the admin image
    Given I am on the page "http://localhost:8888/wp-admin/admin.php?page=map-points-plugin"
      And I enter the value "http://localhost:8888/wp-content/uploads/2014/04/map-alt.jpg" on the admin image input element "#input-wtm-admin-image"
      And I submit the form ".form-wtm"
    When I visit the page "http://localhost:8888/wp-admin/post-new.php?post_type=map_point"
    Then I should see "http://localhost:8888/wp-content/uploads/2014/04/map-alt.jpg" as the source of the element ".display-coords"
  
  Scenario: Set the color scheme
    Given I am on the page "http://localhost:8888/wp-admin/admin.php?page=map-points-plugin"
      And I enter the value "#dd3333" on the primary font input element "#wtm_primary_color"
      And I submit the form ".form-wtm"
    When I visit the page "http://localhost:8888/wp-admin/post-new.php?post_type=map_point"
    Then I should see "background: #dd3333" as the inline style of the element "#acf-wtm_font_color .color-swatcher a:first-of-type"