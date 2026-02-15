export class New_User_Signup {
  constructor(page) {
    this.page = page;
    this.inputName = page.getByPlaceholder("Name");
    this.email = page.locator("[data-qa='signup-email']");
    this.submit = page.locator("[data-qa = 'signup-button']");
    
    
  }
  async enterInputName(name) {
    await this.inputName.fill(name);
  }
  async enterEmail(email) {
    await this.email.fill(email);
     
  }
  async signUpButton() {
   
    await Promise.all([
        this.page.waitForURL("**/signup"), 
        this.submit.click()
    ]);
  }
}
