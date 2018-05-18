package com.task.Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author 
 * If you want to run only the Verify login feature then provide tag name as tags=@LoginValidation
 * If you want to run only the VerifyData Information feature then provide 
 * 				tag name as tags=@DataValidation
 * If you want to run both the feature files then comment the tags line with the double slash
 * 			under the @CucumberOptions annotation.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = "features",
		// tags = "@DataValidation",
		glue = { "stepDefinitions" }, monochrome = true, format = { "pretty", "html:Reports" }

)
public class TestRunner {

}
