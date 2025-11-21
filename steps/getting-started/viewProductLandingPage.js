import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("cydeo secure checkout is visible", async function () {
  await startApplicationPage.leftMenuCydeoLogo.isVisible();
  let text = await startApplicationPage.leftMenuSecureCheckout.innerText();
  expect(text).toBe("Secure checkout ");
  await startApplicationPage.leftMenuLockImage.isVisible();
});

Then("product name is displayed on left menu", async function () {
    await startApplicationPage.productNameOnLeftMenu.isVisible();
});


Then("left footer menu displayed in correct order", async function () {
  await startApplicationPage.validateLeftFooter();
});

Then("right footer menu displays need help section", async function () {
  let text = await startApplicationPage.rightFooterText.innerText();
  expect(text).toBe("Need help? Contact us at enrollment@cydeo.com");
});
