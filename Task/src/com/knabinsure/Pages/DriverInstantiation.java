package com.knabinsure.Pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverInstantiation {

	public static WebDriver initialization(WebDriver driver) {
		
		System.setProperty("webdriver.chrome.driver", "./exe/chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		return driver;
	}
	
	public static void invokeApplication(WebDriver driver,String url) {
		
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		
	}
}
