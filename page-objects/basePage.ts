import { Locator, Page } from "@playwright/test";

export class BasePage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectFromDropDown(dropdown: Locator, text: string) {
        await dropdown.click();
        await this.page.getByText(text, { exact: true }).click();

    }

}

