import { test, expect } from "@playwright/test";
import { New_User_Signup } from "../../src/pages/UI_Pages/signup.page";
import { Signup_Details_Page } from "../../src/pages/UI_Pages/signup_DetailedPage";
import { closedAidIfPresent } from "../../src/utils/handleAid";
import { waitForPageLoad } from "../../src/utils/wait.utils";
import {assertions} from "../../src/pages/UI_Pages/assertions"


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
    //await waitForPageLoad(page)

  });
  test("User Creation with Basic Details", async ({ page }) => {
  //DetailedSignUpPage = new Signup_Details_Page(page)
  BasicSignupDetails = new New_User_Signup(page);
  pageAssertions = new assertions(page)
  

    await test.step("Verify SignUp tet is esent on page", async({})=>{
      await pageAssertions.SignupPageHeader("New User Signup!")
    })

    await test.step("Enter Name", async () => {
      await BasicSignupDetails.enterInputName("Santosh Kumar");
    });
    await test.step("Enter Email", async () => {
      await BasicSignupDetails.enterEmail("cypresslover101@gmail.com");
    });
    await test.step("Click on Sign Up button", async () => {
      await BasicSignupDetails.signUpButton();
      await waitForPageLoad(page)
     
    });


  });

  test("Fill the complete details of user", async({page})=>{
    pageAssertions = new assertions(page)
    await test.step("Verify the header text signup form", async()=>{
      await pageAssertions.detailedPageTxt("Enter Account Information")

    })

    await test.step("Fill the details", async()=>{
      await DetailedSignUpPage.fillAccountDetails()
    })
   
  })


});
