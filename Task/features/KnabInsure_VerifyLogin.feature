#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: Verify the login is successful or failed to login

  @LoginValidation
  Scenario Outline: Verify Login credentials
    Given Verify the login credentials with the given applicationurl "<applicationurl>"
    When user provide the values Email "<emailId>" and Password "<password>"
    Then validate the user login "<status>" whether successful or not

    Examples: 
      | applicationurl                        | emailId                | password  | status  |
      | https://mijn-verzekeren.knab.nl/login | Manoj.Maths@gmail.com  | Winwin777 | success |
      | https://mijn-verzekeren.knab.nl/login | Raguldeepan1@gmail.com | Abcd12345 | Failure |
