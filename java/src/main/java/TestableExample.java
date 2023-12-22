import java.net.URL;

import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class TestableExample {

  // read API key from TESTABLE_KEY env variable
  private static final String KEY = System.getenv("TESTABLE_KEY");

  public static void main(String[] args) throws Exception {
    MutableCapabilities testableOpts = new MutableCapabilities();
    // login to Testable, click the + on the left and select Remote Test to see all options
    testableOpts.setCapability("user", "remote");
    testableOpts.setCapability("key", KEY);
    testableOpts.setCapability("region", "aws-us-east-1");

    ChromeOptions options = new ChromeOptions();
    options.setCapability("browserName", "chrome");
    // browser version can be Latest, Beta, Latest-X for X versions ago, or a number like 119
    options.setCapability("browserVersion", "Latest");
    options.setCapability("testable:options", testableOpts);

    WebDriver driver = new RemoteWebDriver(new URL("https://selenium.testable.io/wd/hub"), options);
    driver.get("https://www.google.com");
    driver.quit();
  }

}
