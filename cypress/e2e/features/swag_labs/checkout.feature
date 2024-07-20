@swaglabs @ui @checkout
  Feature: Checkout Swag Labs

    As an external user
    I want to checkout products in Swag Labs
    So that I can purchase the products

  Background: Visit Swag Labs
    Given I login to Swag Labs
      | username | standard_user |
    And I see products inventory page
      | logo_name | Swag Labs |
      | title     | Products  |

    Scenario: Checkout random products
      Given I add random "3" items to my cart
        | inventory                |
        | Sauce Labs Backpack      |
        | Sauce Labs Bolt T-Shirt  |
        | Sauce Labs Onesie        |
        | Sauce Labs Bike Light    |
        | Sauce Labs Fleece Jacket |
      When I checkout items with my details
        | firstname | lastname | zip    |
        | SysInt    | Test     | 410203 |
      Then I place the order with checkout items
