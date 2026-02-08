import { test, expect } from "@playwright/test";
import { New_User_Signup } from "../../src/pages/UI_Pages/signup.page";
import { Signup_Details_Page } from "../../src/pages/UI_Pages/signup_DetailedPage";
import { closedAidIfPresent } from "../../src/utils/handleAid";

test.describe("Complete User Creation Setup", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
    await closedAidIfPresent(page);
  });
  test("User Creation with Valid Details", async ({ page }) => {
    const BasicSignupDetails = new New_User_Signup(page);

    await test.step("Enter Name", async () => {
      BasicSignupDetails.enterInputName("Santosh Kumar");
    });
    await test.step("Enter Email", async () => {
      BasicSignupDetails.enterEmail("cypresslover101@gmail.com");
    });
  });
});
