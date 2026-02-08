import {expect} from "@playwright/test"
export class assertions
{
constructor(page)
{
    this.page = page;
    //headers and errors locators
    this.SignupPageTxt = page.getByRole("heading", { name: "New User Signup!" });
    this.detailedSignupPageTxt = page.locator("h2[class='title text-center']");
    this.detiledPageAddressTxt = page.locator("h2[class='title text-center']")
}

async SignupPageHeader(txt)
{
await this.SignupPageTxt.isVisible()
await expect(this.SignupPageTxt).toHaveText(txt)
}

async detailedPageTxt(txt)
{
await this.detailedSignupPageTxt.isVisible()
await expect(this.detailedSignupPageTxt).toHaveText(txt)
}
}