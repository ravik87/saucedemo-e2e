@swaglabs @ui @login
  Feature: Login to Swag Labs UI

    As an external user
    I want to login to Swag Labs UI
    So that I can start checkout flow

  Scenario Outline: Login happy day
    Given I login to Swag Labs
      | username   |
      | <username> |
    Then I should see homepage
      | title     |
      | Swag Labs |
    And I logout from Swag Labs

    Examples:
      | username      |
      | standard_user |
      | visual_user   |

