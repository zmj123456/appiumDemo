Feature: To verify whether user is able to login in RC CTI app

  @Automation @P1
  Scenario: Login with DID/DL/company number
    Given Login with RC account
    When I login with "<username>" and "<password>"
    Then I can login successuflly

    Examples:
    |username | password|
    |18662135555 | Test!123|
    |18552026668 |Test!123|
    |18554273335 |Test!123|

