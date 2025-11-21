import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  page,
  reviewPaymentPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "user can see start application payment plan and review parts displayed",
  async function () {
    await startApplicationPage.startApplicationText.isVisible();
    await startApplicationPage.paymentPlanText.isVisible();
    await startApplicationPage.reviewText.isVisible();
  }
);

Then("user can see step one is marked blue", async function () {
  await expect(reviewPaymentPage.step1StepperCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});

Then("user can see payment plan and review parts in grey", async function () {
  await expect(reviewPaymentPage.step2StepperCircle).toHaveCSS(
    "background-color",
    "rgba(0, 0, 0, 0)"
  );

  await expect(reviewPaymentPage.step3StepperCircle).toHaveCSS(
    "background-color",
    "rgba(0, 0, 0, 0)"
  );
});
