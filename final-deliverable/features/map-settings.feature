Feature: Customizing the Map Image
  As an authenticated admin user
  I want to be able to customize the settings of the Map Image
  So that my map is displayed the way I like
 
  Scenario: Set the base image
    Given I am on the page "http://labs.amoscato.com/cs1699-wordpress/wp-admin/admin.php?page=map-points-plugin"
    When I use enter the value "http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/world.jpg" on the input element "#input-wtm-base-image" and save
    Then The source of the element ".link-wtm-image img" should be "http://labs.amoscato.com/cs1699-wordpress/wp-content/uploads/2014/04/world.jpg"