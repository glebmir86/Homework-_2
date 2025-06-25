import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"

export class FinancialData extends BasePage {
    readonly sourceField: Locator
    readonly afterTax: Locator
    readonly percent: Locator
    readonly country: Locator
    readonly agreementNoCheckBox: Locator
    readonly ownerYesCheckbox: Locator
    readonly submit: Locator

    constructor(page: Page) {
        super(page)
        this.sourceField = page.locator('#react-select-3-input');
        this.afterTax = page.locator('#react-select-4-input');
        this.percent = page.locator('#react-select-5-input');
        this.country = page.locator('#react-select-6-input');
        this.agreementNoCheckBox = page.locator('.checkbox ').nth(1);
        this.ownerYesCheckbox = page.locator('.checkbox ').nth(3);
        this.submit = page.getByText('Submit', { exact: true });
    }

    async enterFinancialInfo(
        field1: Locator,
        text1: string,
        field2: Locator,
        text2: string,
        field3: Locator,
        text3: string,
        field4: Locator,
        text4: string
    ) {
        await this.selectFromDropDown(field1, text1);
        await this.selectFromDropDown(field2, text2);
        await this.selectFromDropDown(field3, text3);
        await this.selectFromDropDown(field4, text4);
        await this.agreementNoCheckBox.click();
        await this.ownerYesCheckbox.click();
        await this.submit.click();
    }
}