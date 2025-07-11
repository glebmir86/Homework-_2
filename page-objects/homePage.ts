import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"

export class HomePage extends BasePage {
readonly signUp: Locator
   
    constructor(page: Page) {
        super(page);
        this.signUp = page.locator('#sign-up');        
    }
}
