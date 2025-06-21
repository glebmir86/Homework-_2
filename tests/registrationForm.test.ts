import { test, expect } from '../fixtures/pageManagerFixture';
import userData from '../test-data/registrationUser.json' 
const data: any = userData;

test.beforeEach(async ({page}) => {
  await page.goto('/register');
})

test('test', async ({ page, pageManager }) => {
  
});



