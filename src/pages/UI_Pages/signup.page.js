export class New_User_Signup {
  constructor(page) {
    this.page = page;
    this.inputName = page.getByPlaceholder("Name");
    this.email = page.locator("[data-qa='signup-email']");
    this.submit = page.locator("button[data-qa = 'signup-button']");
    //headers and errors locators
    this.SignupHeader = page.getByRole("heading", { name: "New User Signup!" });
  }
  async enterInputName(name) {
    await this.inputName.fill(name);
  }
  async enterEmail(email) {
    await this.email.fill(email);
  }
  async signUpButton() {
    // Click + wait for URL change
    await Promise.all([this.page.waitForURL("**/signup"), this.submit.click()]);
  }
}
