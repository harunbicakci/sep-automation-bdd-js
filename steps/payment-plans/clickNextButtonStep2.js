import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { start } from "repl";

Given("user has completed step one with valid information", async function () {
  await startApplicationPage.enterFirstName("TestName");
  await startApplicationPage.enterLastName("TestLastName");
  await startApplicationPage.enterEmail("test@test.com");
  await startApplicationPage.enterPhoneNumber("4079876543");
  await startApplicationPage.selectHowDidYouHearAboutUs("email");
  await startApplicationPage.clickNextButton();
});

Given("user is on step two of the enrollment process", async function () {
  await paymentPlanPage.chooseAPaymentPlanText.isVisible();
});

Then("the next button is disabled by default", async function () {
  await paymentPlanPage.inactiveNextButton.isDisabled();
});

When("user clicks upfront payment option", async function () {
  await paymentPlanPage.selectPaymentPlan("Upfront");
});

Then("the next button will be enabled", async function () {
  await paymentPlanPage.inactiveNextButton.isEnabled();
});

When("user clicks installments payment option", async function () {
  await paymentPlanPage.selectPaymentPlan("installments");
});
