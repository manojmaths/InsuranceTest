package com.knabinsure.Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class KnabInsureLoginPage {

	public static void loginApplication(WebDriver driver, String userid, String password) {

		driver.findElement(By.xpath("//input[@type='email' and @id='email']")).sendKeys(userid.trim());
		driver.findElement(By.xpath("//input[@id='password' and @type='password']")).sendKeys(password.trim());
		driver.findElement(By.xpath("//button[@type='submit']")).submit();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}

	public static void validateLogin(WebDriver driver, String status) {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		String currentUrl = driver.getCurrentUrl();

		if (currentUrl.contains("login") && status.equalsIgnoreCase("Failure")) {

			System.out.println("Test passed with the given status with the login error as expected ");
		} else if (!currentUrl.contains("login") && status.equalsIgnoreCase("Success")) {

			System.out.println("Test passed with the given status with Successful login");
		}

		driver.close();
	}

}
