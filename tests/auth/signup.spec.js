import { test, expect } from "@playwright/test";
import { New_User_Signup } from "../../src/pages/UI_Pages/signup.page";
import { Signup_Details_Page } from "../../src/pages/UI_Pages/signup_DetailedPage";
import { closedAidIfPresent } from "../../src/utils/handleAid";
import { waitForPageLoad } from "../../src/utils/wait.utils";
import {assertions} from "../../src/pages/UI_Pages/assertions"
import {testData} from "../../src/testData/users.json"


// Object creation of class

 let DetailedSignUpPage;
 let BasicSignupDetails;
 let pageAssertions;
//Object creation of class
test.describe("Complete User Creation Setup", () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto("/login", {waitUntil: "domcontentloaded"});
    let newVar = await closedAidIfPresent(page);
    console.log(newVar)
    console.log("after goto")
    
  });
  test("User Creation with Basic Details", async ({ page }) => {
  BasicSignupDetails = new New_User_Signup(page);
  pageAssertions = new assertions(page)
  DetailedSignUpPage = new Signup_Details_Page(page)
  
    await test.step("Verify SignUp tet is esent on page", async({})=>{
      await pageAssertions.SignupPageHeader("New User Signup!")
    })

    await test.step("Enter Name", async () => {
      await BasicSignupDetails.enterInputName(testData.BasicSignupDetails.Name);
    });
    await test.step("Enter Email", async () => {
      await BasicSignupDetails.enterEmail(testData.BasicSignupDetails.Email);
    });
    await test.step("Click on Sign Up button", async () => {
      await BasicSignupDetails.signUpButton();
     });

    await test.step("Fill the complete details", async()=>{
      await DetailedSignUpPage.fillAccountDetails()
    });
    // await test.step("Click on create an account button", async()=>{
    //   await DetailedSignUpPage.createAccount()
    // })
  })
});
