import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("upfront payment option should be highlighted", async function () {
    await paymentPlanPage.extentionPanel1.isVisible();
});

Then("installments payment option should be highlighted", async function () {
    await paymentPlanPage.extentionPanel2.isVisible();
});
