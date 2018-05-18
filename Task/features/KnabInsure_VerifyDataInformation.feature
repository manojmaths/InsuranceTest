Feature:  Testing the Car and Driver Data Information when following values are passed inputs 
								such as ClaimNumber,LicensePlate,DOB,Sex and Postcode

  @DataValidation
  Scenario Outline: Validating the Car and Driver information
    Given User should be logged in the Application using the url"<URL>" username "<username>" and password "<password>"
    When User provide the required values ClaimFreeYears "<ClaimFreeYears>" ,LicensePlate "<LicensePlate>" , DOB "<DOB>",Sex "<Sex>" and Postcode "<Postcode>"
    And Validate the Car/Driver or both Information, based on the ValidationCategory "<ValidationCategory>".
    Then I verify the expected status "<status>" with the outcome status

    Examples: 
|ValidationCategory| 									URL   							 | 				username  		  | 	password 	| 	ClaimFreeYears	|  LicensePlate	 | 	 DOB	 		| 	Sex	 | 	Postcode	 | 		status 	|
|  Driver					 | https://mijn-verzekeren.knab.nl/login | Manoj.Maths@gmail.com  |  Winwin777 	| 		20						|	   AF-19-65		 | 18/05/2018 |   Male |    G14RU		 |    Success |
|  Car						 | https://mijn-verzekeren.knab.nl/login | Manoj.Maths@gmail.com	|  Winwin777 	| 		60 						|	   AF-22-65		 | 18/05/2018 |   Male |    G14RU		 |    Failure |
|  Both						 | https://mijn-verzekeren.knab.nl/login | Manoj.Maths@gmail.com	|  Winwin777 	| 		60 						|	   AF-22-65		 | 18/05/2018 |   Male |    G14RU		 |    Failure |
