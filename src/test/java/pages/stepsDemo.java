package pages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by paddy.zhong on 7/19/2017.
 */
public class stepsDemo extends cucumberDemo{

    @Given("^Login with RC account$")
    public void openBrowser() throws InterruptedException {
        cucumberDemo cucumberDemo = new cucumberDemo();
        cucumberDemo.openGoogle();
    }

    @When("^I login with \"(.*?)\" and \"(.*?)\"$")
    public void login() throws InterruptedException {
        cucumberDemo cucumberDemo = new cucumberDemo();
        cucumberDemo.openGoogle();
        cucumberDemo.loginAccount();
    }

    @Then("^I can login successuflly$")
    public void loginSuccess(){

    }
}
