import { Locator, Page } from "@playwright/test";
import path from 'path';

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectFromDropDown(dropdown: Locator, text: string) {
        await dropdown.click();
        await this.page.getByText(text, { exact: true }).click();
    }

    async uploadFiles(locator: Locator, dirPath: string, fileNames: string[]) {
        const paths = fileNames.map(name => path.join(__dirname, dirPath, name));
        await locator.setInputFiles(paths);
    }
}

