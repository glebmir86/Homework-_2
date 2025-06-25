import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class IdentityVerification extends BasePage {
    readonly inputFile: Locator
    readonly submit: Locator

    constructor(page: Page) {
        super(page);
        this.inputFile = page.locator('input[type="file"]');
        this.submit = page.getByText('Submit');
    }
    
    async uploadIDVerification(locator: Locator, dirPath: string, fileNames: string[]) {
        await this.uploadFiles(locator, dirPath, fileNames);
        await this.submit.click();
    }
}