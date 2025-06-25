import { test, expect } from '../fixtures/pageManagerFixture';
import userData from '../test-data/userCredentials.json';
const userCredentials: any = userData;
import { doPostRequest } from '../helpers/apiClient';
import { isUserBroken } from '../helpers/utils'

test('Login and handle user broken state', async ({ page, pageManager, request, baseURL }) => {
  //Send login API and check status
  const response = await doPostRequest(request, `${baseURL}rest/public/login`, {
    name: userCredentials.username,
    password: userCredentials.password
  });
  expect(response.status()).toBe(200);

  // Check for broken state and register user
  const body = await response.json();
  if (isUserBroken(body)) {
    console.log('User is broken. Registering new one...');
    //Create new user
    await page.goto('');
    await page.getByText('Allow all cookies').click();
    await pageManager.homePage().signUp.click();

    //Enter SignUp Data    
    await pageManager.signUp().enterSignUpData("Latvia ( +371 )", "Pass123456", undefined, undefined, true, true, true);

    //Enter Personal Information    
    await pageManager.personalInformation().enterPersonalInfo("John", "Doe", "01011970", "testAddress 123", "Latvia", "01012030", undefined);

    //Enter Financial Information
    await pageManager.financialData().enterFinancialInfo(
      await pageManager.financialData().sourceField, "Gift",
      await pageManager.financialData().afterTax, "Less than EUR 20 000",
      await pageManager.financialData().percent, "Less than 10%",
      await pageManager.financialData().country, "France"
    )

    //Upload photos
    await pageManager.identityVerification().uploadIDVerification(
      pageManager.identityVerification().inputFile,
      '../test-data/Image/',
      ['1.jpg', '2.jpg', '3.jpg']);

    //Verify customer is created
    await expect(page.getByText('To start investing please add funds')).toBeVisible();
    await page.locator('#logout').click();
  }
});



