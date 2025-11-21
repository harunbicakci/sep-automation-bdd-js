import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("product name is displayed", async function () {
  await startApplicationPage.programNameOnInfoCard.isVisible();
});

Then(
  "product name matches with the product name on the left menu",
  async function () {
    let leftMenuText =
      await startApplicationPage.productNameOnLeftMenu.innerText();
    let productNameText =
      await startApplicationPage.programNameOnInfoCard.innerText();

    await expect(leftMenuText).toBe(productNameText);
  }
);

Then("flexible payments plan is displayed", async function () {
  await startApplicationPage.flexiblePaymentsPlanAvailableText.isVisible();
});

Then("return policy and final date should be displayed", async function () {
  await startApplicationPage.programStartDate.isVisible();
  await startApplicationPage.refundEndDate.isVisible();
});
