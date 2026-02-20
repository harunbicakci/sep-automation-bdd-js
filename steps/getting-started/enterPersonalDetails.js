import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("first name field is visible", async function () {
  await startApplicationPage.firstNameInputBox.isEnabled;
});

Then("last name field is visible", async function () {
  await startApplicationPage.lastNameInputBox.isEnabled();
});

Then("email field is visible and accepts email format", async function () {
  await startApplicationPage.emailInputBox.isEnabled();
  await startApplicationPage.enterEmail("test@test.com");
});

Then("phone field is visible and accepts numbers only", async function () {
  await startApplicationPage.phoneNumberInputBox.isEnabled();
  await startApplicationPage.enterPhoneNumber("asdqwezxc");
  await startApplicationPage.phoneNumberInputBox.clear();
});

Then(
  "how did you hear about us field is a standard dropdown",
  async function () {
    await startApplicationPage.selectHowDidYouHearAboutUs("Google");
  }
);

When("valid first name is entered", async function () {
  await startApplicationPage.enterFirstName("TestName");
});

Then("the next button will be disabled", async function () {
  await startApplicationPage.nextButton.isDisabled();
});

When("valid last name is entered", async function () {
  await startApplicationPage.enterLastName("TestLastName");
});

When("valid email is entered", async function () {
  await startApplicationPage.enterEmail("user@test.com");
});

When("valid phone number is entered", async function () {
  await startApplicationPage.enterPhoneNumber("4071234567");
});
