@swaglabs @ui @login
  Feature: Login to Swag Labs UI

    As an external user
    I want to login to Swag Labs UI
    So that I can checkout and purchase items

  Scenario Outline: Login happy day
    Given I login to Swag Labs UI
      | username   |
      | <username> |
    Then I should see the home page
      | title     |
      | Swag Labs |

    Examples:
      | username      |
      | standard_user |
      | visual_user   |

