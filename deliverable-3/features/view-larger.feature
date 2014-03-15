Feature: User can view larger versions of images via fancyBox
  As a user
  I want to be able to view larger versions of the thumbnails from a website 
  So that I can see the image more clearly

  Scenario: User clicks on an image
    Given a thumbnail-sized image on a webpage
    When I click the thumbnail image
    Then I should see a full-size version of the image within the fancyBox