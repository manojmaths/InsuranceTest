$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("KnabInsure_VerifyDataInformation.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Testing the Car and Driver Data Information when following values are passed inputs",
  "description": "\t\t\t\t\t\tsuch as ClaimNumber,LicensePlate,DOB,Sex and Postcode",
  "id": "testing-the-car-and-driver-data-information-when-following-values-are-passed-inputs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Validating the Car and Driver information",
  "description": "",
  "id": "testing-the-car-and-driver-data-information-when-following-values-are-passed-inputs;validating-the-car-and-driver-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@DataValidation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User should be logged in the Application using the url\"\u003cURL\u003e\" username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User provide the required values ClaimFreeYears \"\u003cClaimFreeYears\u003e\" ,LicensePlate \"\u003cLicensePlate\u003e\" , DOB \"\u003cDOB\u003e\",Sex \"\u003cSex\u003e\" and Postcode \"\u003cPostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Validate the Car/Driver or both Information, based on the ValidationCategory \"\u003cValidationCategory\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify the expected status \"\u003cstatus\u003e\" with the outcome status",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "testing-the-car-and-driver-data-information-when-following-values-are-passed-inputs;validating-the-car-and-driver-information;",
  "rows": [
    {
      "cells": [
        "ValidationCategory",
        "URL",
        "username",
        "password",
        "ClaimFreeYears",
        "LicensePlate",
        "DOB",
        "Sex",
        "Postcode",
        "status"
      ],
      "line": 31,
      "id": "testing-the-car-and-driver-data-information-when-following-values-are-passed-inputs;validating-the-car-and-driver-information;;1"
    },
    {
      "cells": [
        "Driver",
        "https://mijn-verzekeren.knab.nl/login",
        "Manoj.Maths@gmail.com",
        "Winwin777",
        "20",
        "AF-19-65",
        "18/05/2018",
        "Male",
        "G14RU",
        "Success"
      ],
      "line": 32,
      "id": "testing-the-car-and-driver-data-information-when-following-values-are-passed-inputs;validating-the-car-and-driver-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Validating the Car and Driver information",
  "description": "",
  "id": "testing-the-car-and-driver-data-information-when-following-values-are-passed-inputs;validating-the-car-and-driver-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@DataValidation"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User should be logged in the Application using the url\"https://mijn-verzekeren.knab.nl/login\" username \"Manoj.Maths@gmail.com\" and password \"Winwin777\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User provide the required values ClaimFreeYears \"20\" ,LicensePlate \"AF-19-65\" , DOB \"18/05/2018\",Sex \"Male\" and Postcode \"G14RU\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Validate the Car/Driver or both Information, based on the ValidationCategory \"Driver\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify the expected status \"Success\" with the outcome status",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://mijn-verzekeren.knab.nl/login",
      "offset": 55
    },
    {
      "val": "Manoj.Maths@gmail.com",
      "offset": 104
    },
    {
      "val": "Winwin777",
      "offset": 141
    }
  ],
  "location": "DataValidation.user_should_be_logged_in_the_Application_using_the_url_username_and_password(String,String,String)"
});
formatter.result({
  "duration": 24398719871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 49
    },
    {
      "val": "AF-19-65",
      "offset": 68
    },
    {
      "val": "18/05/2018",
      "offset": 85
    },
    {
      "val": "Male",
      "offset": 102
    },
    {
      "val": "G14RU",
      "offset": 122
    }
  ],
  "location": "DataValidation.user_provide_the_required_values_claimNumber_LicensePlate_DOB_Sex_and_Postcode(String,String,String,String,String)"
});
formatter.result({
  "duration": 369465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Driver",
      "offset": 78
    }
  ],
  "location": "DataValidation.validate_the_Car_Driver_or_both_Information_based_on_the_ValidationCategory(String)"
});
formatter.result({
  "duration": 9871322025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 30
    }
  ],
  "location": "DataValidation.i_verify_the_expected_status_with_the_outcome_status(String)"
});
formatter.result({
  "duration": 3049657389,
  "status": "passed"
});
formatter.uri("KnabInsure_VerifyLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Verify the login is successful or failed to login",
  "description": "",
  "id": "verify-the-login-is-successful-or-failed-to-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify Login credentials",
  "description": "",
  "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Verify the login credentials with the given applicationurl \"\u003capplicationurl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user provide the values Email \"\u003cemailId\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "validate the user login \"\u003cstatus\u003e\" whether successful or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials;",
  "rows": [
    {
      "cells": [
        "applicationurl",
        "emailId",
        "password",
        "status"
      ],
      "line": 28,
      "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials;;1"
    },
    {
      "cells": [
        "https://mijn-verzekeren.knab.nl/login",
        "Manoj.Maths@gmail.com",
        "Winwin777",
        "success"
      ],
      "line": 29,
      "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials;;2"
    },
    {
      "cells": [
        "https://mijn-verzekeren.knab.nl/login",
        "Raguldeepan1@gmail.com",
        "Abcd12345",
        "Failure"
      ],
      "line": 30,
      "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "Verify Login credentials",
  "description": "",
  "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Verify the login credentials with the given applicationurl \"https://mijn-verzekeren.knab.nl/login\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user provide the values Email \"Manoj.Maths@gmail.com\" and Password \"Winwin777\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "validate the user login \"success\" whether successful or not",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://mijn-verzekeren.knab.nl/login",
      "offset": 60
    }
  ],
  "location": "StepDefinition.verify_the_login_credentials_with_the_given_applicationurl(String)"
});
formatter.result({
  "duration": 10051453401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manoj.Maths@gmail.com",
      "offset": 31
    },
    {
      "val": "Winwin777",
      "offset": 68
    }
  ],
  "location": "StepDefinition.user_provide_the_values_Email_and_Password(String,String)"
});
formatter.result({
  "duration": 3515825669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 25
    }
  ],
  "location": "StepDefinition.validate_the_user_login_whether_successful_or_not(String)"
});
formatter.result({
  "duration": 2440350190,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify Login credentials",
  "description": "",
  "id": "verify-the-login-is-successful-or-failed-to-login;verify-login-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Verify the login credentials with the given applicationurl \"https://mijn-verzekeren.knab.nl/login\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "user provide the values Email \"Raguldeepan1@gmail.com\" and Password \"Abcd12345\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "validate the user login \"Failure\" whether successful or not",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://mijn-verzekeren.knab.nl/login",
      "offset": 60
    }
  ],
  "location": "StepDefinition.verify_the_login_credentials_with_the_given_applicationurl(String)"
});
formatter.result({
  "duration": 21138203431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raguldeepan1@gmail.com",
      "offset": 31
    },
    {
      "val": "Abcd12345",
      "offset": 69
    }
  ],
  "location": "StepDefinition.user_provide_the_values_Email_and_Password(String,String)"
});
formatter.result({
  "duration": 1263919332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Failure",
      "offset": 25
    }
  ],
  "location": "StepDefinition.validate_the_user_login_whether_successful_or_not(String)"
});
formatter.result({
  "duration": 682561000,
  "status": "passed"
});
});