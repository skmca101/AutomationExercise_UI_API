export class Signup_Details_Page {
  constructor(page) {
    this.page = page;
    this.password = page.locator("#password");
    this.day = page.locator("#days");
    this.month = page.locator("#months");
    this.year = page.locator("#years");

    this.firstName = page.locator("#first_name");
    this.lastName = page.locator("#last_name");
    this.address = page.locator("#address1");
    this.state = page.locator("#state");
    this.city = page.locator("#city");
    this.zipcode = page.locator("#zipcode");
    this.mobile = page.locator("#mobile_number");

    this.createAccountBtn = page.locator("button[data-qa='create-account']");
    this.accountCreatedHeader = page.getByRole("heading", {
      name: "Account Created!",
    });
  }

  async fillAccountDetails() {
    await this.password.fill("Test@123");
    await this.day.selectOption("10");
    await this.month.selectOption("5");
    await this.year.selectOption("1995");

    await this.firstName.fill("Santosh");
    await this.lastName.fill("Kumar");
    await this.address.fill("Bangalore");
    await this.state.fill("Karnataka");
    await this.city.fill("Bangalore");
    await this.zipcode.fill("560001");
    await this.mobile.fill("9999999999");
  }

  async createAccount() {
    await this.createAccountBtn.click();
  }
}
