import { test, expect } from "@playwright/test";
import { waitForDebugger } from "node:inspector";

test.describe("Handle the dashboard items without login- using globalSetup", () => {
  test("verify the count of headers menu ", async ({ page }) => {
    await test.step("login using auth and then logout", async () => {
      await page.goto("/");
      expect(page.locator("text = Logged in as"));
      let signOut = page.getByRole("listitem").filter({ hasText: "Logout" });
      await signOut.waitFor({ state: "visible" });
      await signOut.click();
      await expect(page).toHaveURL("/login");
    });
  });
});
