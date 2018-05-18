package stepDefinitions;

import org.openqa.selenium.WebDriver;

import com.knabinsure.Pages.DriverInstantiation;
import com.knabinsure.Pages.KnabInsureLoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	WebDriver driver;

	@Given("^Verify the login credentials with the given applicationurl \"([^\"]*)\"$")
	public void verify_the_login_credentials_with_the_given_applicationurl(String url) throws Throwable {
		System.out.println("URL-->" + url);
		driver = DriverInstantiation.initialization(driver);
		DriverInstantiation.invokeApplication(driver, url);
	}

	@When("^user provide the values Email \"([^\"]*)\" and Password \"([^\"]*)\"$")
	public void user_provide_the_values_Email_and_Password(String userid, String password) throws Throwable {
		System.out.println(userid + " " + password);
		KnabInsureLoginPage.loginApplication(driver, userid,password);

	}

	@Then("^validate the user login \"([^\"]*)\" whether successful or not$")
	public void validate_the_user_login_whether_successful_or_not(String status) throws Throwable {
		System.out.println("Then method and Respective Status--->"+status);
		KnabInsureLoginPage.validateLogin(driver, status);
		
	}

}
