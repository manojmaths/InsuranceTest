package com.knabinsure.Pages;

import java.util.HashMap;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class DetailHomePage {

	static String result = "";

	public static String validateCarInformation(WebDriver driver, HashMap<String, String> data) throws Exception {

		driver.findElement(By.xpath("//input[@id='licensePlate' and @type='text']")).clear();
		driver.findElement(By.xpath("//input[@id='licensePlate' and @type='text']"))
				.sendKeys(data.get("LicensePlate").trim());

		Thread.sleep(2000);

		driver.findElement(By.id("claimFreeYears")).clear();
		driver.findElement(By.id("claimFreeYears")).sendKeys(data.get("ClaimFreeYears").trim());

		driver.findElement(By.xpath("//input[@id='licensePlate' and @type='text']")).click();
		
		Thread.sleep(2000);

		if (isElementPresent(driver, By.xpath("//div[contains(@data-error,'niet')]"))) {

			List<WebElement> errorCount = driver.findElements(By.xpath("//div[contains(@data-error,'niet')]"));
			System.out.println("Car data information error count is --->" + errorCount.size());
			if (errorCount.size() > 0) {
				result = "Failure";
			} else {
				result = "Success";
			}

		} else {

			result = "Success";
		}

		return result;
	}

	public static String validateMainDriverInformation(WebDriver driver, HashMap<String, String> data)
			throws Exception {

		driver.findElement(By.id("birthDate")).clear();
		driver.findElement(By.id("birthDate")).sendKeys(data.get("DOB"));

		if (data.get("Sex").equalsIgnoreCase("Man") || data.get("Sex").equalsIgnoreCase("Men")) {

			driver.findElement(By.xpath("//input[@type='radio'][1]")).click();

		} else if (data.get("Sex").equalsIgnoreCase("Woman") || data.get("Sex").equalsIgnoreCase("Vrouw")) {

			driver.findElement(By.xpath("//input[@type='radio'][2]")).click();

		} else {

			result = "Failure";
		}

		driver.findElement(By.xpath("//input[@type='text' and @id='postalCode']")).clear();
		driver.findElement(By.xpath("//input[@type='text' and @id='postalCode']")).sendKeys(data.get("Postcode"));

		driver.findElement(By.id("birthDate")).click();

		Thread.sleep(3000);

		if (isElementPresent(driver, By.xpath("//div[contains(@data-error,'geldige postcode')]"))) {

			List<WebElement> errorCount = driver
					.findElements(By.xpath("//div[contains(@data-error,'geldige postcode')]"));
			System.out.println("Driver information error count is --->" + errorCount.size());
			if (errorCount.size() > 0) {
				result = "Failure";
			} else {
				result = "Success";
			}

		} else {

			result = "Success";
		}

		return result;
	}

	public static boolean isElementPresent(WebDriver driver, By by) {
		try {
			driver.findElements(by);
			return true;
		} catch (org.openqa.selenium.NoSuchElementException e) {
			return false;
		}
	}

}
