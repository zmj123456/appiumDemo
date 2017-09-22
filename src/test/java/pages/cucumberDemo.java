package pages;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import javax.swing.*;
import java.util.ArrayList;

/**
 * Created by paddy.zhong on 7/18/2017.
 */
public class cucumberDemo {

    WebDriver driver;

    @BeforeTest
    public void openChrome(){
        System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        String path = System.getProperty("user.dir");

        options.addArguments("load-extension=" + path + ".//extension//rc");
        options.addArguments("--disable-web-security");
        options.addArguments("--disable-confirmation");
        options.addArguments("--disable-popup-blocking");
        options.addArguments("--use-fake-ui-for-media-stream");
        options.addArguments("--use-fake-device-for-media-stream");
        options.addArguments("--enable-logging=stderr");
//        options.addArguments("--site-per-process");
        options.addArguments("--log-level=4");
        final DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        driver = new ChromeDriver(options);
    }

    @Test
    public void openGoogle() throws InterruptedException {
        driver.get("chrome-extension://pgjpmeckehbghpkamdammcgmmmbojbdi/background.html"); //open Google
        Thread.sleep(3000);
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("toggleEnv()");
        Thread.sleep(3000);
        WebElement element = driver.findElement(By.className("node_modules-ringcentral-widget-components-TextInput-_styles_input_1UMCP"));
        element.clear();
        element.sendKeys("https://api-up.lab.rcch.ringcentral.com");
        Thread.sleep(3000);
        driver.findElement(By.className("node_modules-ringcentral-widget-components-Switch-_styles_slider_shBp9")).click();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"viewport\"]/div/div[2]/header/div[3]/div")).click(); // change environment
        Thread.sleep(3000);
        driver.findElement(By.className("node_modules-ringcentral-widget-components-LoginPanel-_styles_loginButton_27h1P")).click();
        Thread.sleep(3000);

//        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
//        driver.switchTo().window(tabs.get(driver.getWindowHandles().size() - 1));
        String handle = driver.getWindowHandle();
        for (String handles : driver.getWindowHandles()){
            if(handles.equals(handle)){
                continue;
            }
            driver.switchTo().window(handles);
        }
        new WebDriverWait(driver,60).until(ExpectedConditions.numberOfElementsToBe(By.id("rc-login-number"),1));
        WebElement element2 = driver.findElement(By.id("rc-login-number"));
        element2.clear();
        element2.sendKeys("18552026668");
        Thread.sleep(3000);
        WebElement element1 = driver.findElement(By.id("rc-login-password"));
        element1.clear();
        element1.sendKeys("Test!123");
        Thread.sleep(3000);
        driver.findElement(By.xpath("//*[@id=\"pageContent\"]/div/div/div/div/div/div[2]/div[2]/form/div/div[4]/button")).click();
        Thread.sleep(3000);
        driver.switchTo().window(handle);
        driver.findElement(By.xpath("//*[@id=\"viewport\"]/div/div/nav/div[6]/div/div")).click();
    }

    @Test
    public void loginAccount() throws InterruptedException {
//        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
//        driver.switchTo().window(tabs.get(driver.getWindowHandles().size() - 1));
//        new WebDriverWait(driver,60).until(ExpectedConditions.numberOfElementsToBe(By.id("rc-login-number"),1));
//        WebElement element2 = driver.findElement(By.id("rc-login-number"));
//        element2.clear();
//        element2.sendKeys("18662135555");
//        Thread.sleep(3000);
//        WebElement element1 = driver.findElement(By.id("rc-login-password"));
//        element1.clear();
//        element1.sendKeys("Test!123");
    }

}
