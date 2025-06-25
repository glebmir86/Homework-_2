import { test, expect, request } from '../fixtures/pageManagerFixture';
import userData from '../test-data/registrationUser.json'
const data: any = userData;


test('Login and handle user broken state', async ({ page, pageManager }) => {
  //Send login API and check status
  //Todo - rewrite code, so we could re use API
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://swaper.com/rest/public/login', {
    data: {
      name: 'testuser@qa.com',
      password: 'Parole123'
    }
  });

  expect(response.status()).toBe(200);
  // to do: check for broken state and register user
  // Write as separate function

  const body = await response.json()

  const validIdDocStatuses = ['WAITING_FOR_APPROVAL', 'APPROVED'];

  const isBroken =
    !validIdDocStatuses.includes(body.idDocumentsStatus) &&
    body.isPepOrPrivateInvestorNotOwner === true;

  if (isBroken) {
    console.log('User is broken. Registering new one...');
    //Create new user
    await page.goto('');
    await page.getByText('Allow all cookies').click()
    await pageManager.homePage().signUp.click();

    //Enter SignUp Data    
    await pageManager.signUp().enterSignUpData("Latvia ( +371 )", "Pass123456", undefined, undefined, true, true, true) // this dropdown function is not working here

    //Enter Personal Information    
    await pageManager.personalInformation().enterPersonalInfo("John", "Doe", "01011970", "testAddress 123", "Latvia", "01012030", undefined)

    //Enter Financial Information
    await pageManager.financialData().enterFinancialInfo(
      await pageManager.financialData().sourceField, "Gift",
      await pageManager.financialData().afterTax, "Less than EUR 20 000",
      await pageManager.financialData().percent, "Less than 10%", 
      await pageManager.financialData().country, "France"
    )
 
    await page.pause();

    //Upload photos

    //await page.locator('input[type="file"]').setInputFiles()
  }
});



