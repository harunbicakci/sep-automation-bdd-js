import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When(
  "user has completed step one with only required fields",
  async function () {
    await startApplicationPage.enterFirstName("TestName");
    await startApplicationPage.enterLastName("TestLastName");
    await startApplicationPage.enterEmail("test@test.com");
    await startApplicationPage.enterPhoneNumber("4079876543");
    await startApplicationPage.clickNextButton();
  }
);
