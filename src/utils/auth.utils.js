import { chromium } from "@playwright/test";
import { closedAidIfPresent } from "../../src/utils/handleAid";
async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(process.env.BASEURL + "/login",{waitUntil: "domcontentloaded"});
  let newVar = await closedAidIfPresent(page);
    console.log(newVar)
  await page
    .locator('input[data-qa="login-email"]')
    .fill("cypresslover101@gmail.com");
  await page.locator('input[data-qa="login-password"]').fill("Test@123");
  await page.getByRole("button", {name: "Login"}).click();
  await page.waitForSelector("text=Logged in as");
  await page.context().storageState({ path: "session.json" });
  await browser.close();
}
export default globalSetup;
