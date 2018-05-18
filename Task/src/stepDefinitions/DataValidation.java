package stepDefinitions;

import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.knabinsure.Pages.DetailHomePage;
import com.knabinsure.Pages.DriverInstantiation;
import com.knabinsure.Pages.KnabInsureLoginPage;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataValidation {

	WebDriver driver;
	HashMap<String, String> dataMap = new HashMap<String, String>();
	String OutcomeCarStatus = "", OutcomeDriverInfoStatus = "";

	@Given("^User should be logged in the Application using the url\"([^\"]*)\" username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_should_be_logged_in_the_Application_using_the_url_username_and_password(String URL,
			String username, String password) throws Throwable {

		driver = DriverInstantiation.initialization(driver);
		DriverInstantiation.invokeApplication(driver, URL);
		KnabInsureLoginPage.loginApplication(driver, username, password);
	}

	@When("^User provide the required values ClaimFreeYears \"([^\"]*)\" ,LicensePlate \"([^\"]*)\" , DOB \"([^\"]*)\",Sex \"([^\"]*)\" and Postcode \"([^\"]*)\"$")
	public void user_provide_the_required_values_claimNumber_LicensePlate_DOB_Sex_and_Postcode(String ClaimFreeYears,
			String LicensePlate, String DOB, String Sex, String Postcode) throws Throwable {

		dataMap.put("ClaimFreeYears", ClaimFreeYears);
		dataMap.put("LicensePlate", LicensePlate);
		dataMap.put("DOB", DOB);
		dataMap.put("Sex", Sex);
		dataMap.put("Postcode", Postcode);
	}

	@When("^Validate the Car/Driver or both Information, based on the ValidationCategory \"([^\"]*)\"\\.$")
	public void validate_the_Car_Driver_or_both_Information_based_on_the_ValidationCategory(String ValidationCategory)
			throws Throwable {

		dataMap.put("ValidationCategory", ValidationCategory);

		System.out.println("Before calling the step methods Map value is --->" + dataMap.toString());

		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id='licensePlate' and @type='text']")));

		if (dataMap.get("ValidationCategory").trim().equalsIgnoreCase("Driver")) {

			OutcomeDriverInfoStatus = DetailHomePage.validateMainDriverInformation(driver, dataMap);

		} else if (dataMap.get("ValidationCategory").trim().equalsIgnoreCase("Car")) {

			OutcomeCarStatus = DetailHomePage.validateCarInformation(driver, dataMap);
		} else if (dataMap.get("ValidationCategory").trim().equalsIgnoreCase("Both")) {

			OutcomeCarStatus = DetailHomePage.validateCarInformation(driver, dataMap);
			OutcomeDriverInfoStatus = DetailHomePage.validateMainDriverInformation(driver, dataMap);

		} else {
			throw new PendingException();
		}
	}

	@Then("^I verify the expected status \"([^\"]*)\" with the outcome status$")
	public void i_verify_the_expected_status_with_the_outcome_status(String expectedStatus) throws Throwable {

		String finalStatus = "";

		System.out.println("Validation Category is --->" + dataMap.get("ValidationCategory"));
		if (dataMap.get("ValidationCategory").trim().equalsIgnoreCase("Driver")) {

			finalStatus = OutcomeDriverInfoStatus;

		} else if (dataMap.get("ValidationCategory").trim().equalsIgnoreCase("Car")) {

			finalStatus = OutcomeCarStatus;

		} else if (dataMap.get("ValidationCategory").trim().equalsIgnoreCase("Both")) {

			System.out.println("Validation Category is Both , hence OutcomeCarStatus is -->" + OutcomeCarStatus
					+ " OutcomeDriverStatus " + "--->" + OutcomeDriverInfoStatus);

			if (OutcomeCarStatus.equals("Success") && OutcomeDriverInfoStatus.equals("Success")) {

				finalStatus = "Success";
			} else {

				finalStatus = "Failure";

			}

		} else {
			throw new PendingException();
		}

		System.out.println("Final Status is --->" + finalStatus);

		if (expectedStatus.equalsIgnoreCase(finalStatus)) {

			System.out.println(
					"Test Case Passed :: Outcome Status key Value is matched with the ExpectedInput 'Status' Key from feature file");

		} else {
			System.out.println(
					"Test Case Failed :: Outcome Status Key Value does not matched with the ExpectedInput 'Status'  Key from feature file");
		}

		driver.close();
		// driver.quit();
	}
}
