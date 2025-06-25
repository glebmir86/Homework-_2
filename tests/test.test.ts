import { test, expect, request } from '../fixtures/pageManagerFixture';
import userData from '../test-data/registrationUser.json'
const data: any = userData;


test('test', async ({ page, pageManager }) => {
await page.goto('');
    await page.getByText('Allow all cookies').click()
    await pageManager.homePage().signUp.click();
    //2 lines below are working fine
await page.getByPlaceholder('E-mail').fill('aaa@aaaa.com')
// 2 lines below are working
await pageManager.signUp().countrySelection.click(); 
await page.getByText('Latvia').click();
await page.pause();
   //pageManager.signUp().enterSignUpData("Latvia", "Pass123456", undefined, undefined, true, true, true)

})