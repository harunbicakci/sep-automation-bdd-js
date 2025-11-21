import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
  reviewPaymentPage,
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

When("user clicks next button", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("user is on step three of the enrollment process", async function () {
  await reviewPaymentPage.paymentForm.isVisible();
});

Then(
  "user can see step one and step two are green and step three is blue color",
  async function () {
    await expect(reviewPaymentPage.step1StepperCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)"
    );
    await expect(reviewPaymentPage.step2StepperCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)"
    );

    await expect(reviewPaymentPage.step3StepperCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)"
    );
  }
);

Then("price summary and back buttons are displayed", async function () {
  await reviewPaymentPage.totalAmount.isVisible();
  await reviewPaymentPage.backButton.isVisible();
});

Then("pay button is displayed", async function () {
  await reviewPaymentPage.backButton.isVisible();
});
