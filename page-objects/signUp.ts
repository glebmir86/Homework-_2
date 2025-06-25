import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"
import * as DataGenerator from '../helpers/dataGenerator'

export class SignUp extends BasePage {
    readonly emailField: Locator
    readonly countrySelection: Locator
    readonly phoneNumberField: Locator
    readonly passwordField: Locator
    readonly verificationMessage: Locator
    readonly termsOfUse: Locator
    readonly privacyPolicy: Locator
    readonly communication: Locator
    readonly next: Locator

    constructor(page: Page) {
        super(page);
        this.emailField = page.getByPlaceholder('E-mail');
        this.countrySelection = page.locator('#phone-container').locator('.tablediv').first();
        this.phoneNumberField = page.getByPlaceholder('Phone');
        this.passwordField = page.getByPlaceholder('Password');
        this.verificationMessage = page.getByText('At least one uppercase letter');
        this.termsOfUse = page.locator('.checkbox').nth(0);
        this.privacyPolicy = page.locator('.checkbox').nth(1);
        this.communication = page.locator('.checkbox').nth(2);
        this.next = page.getByText('Next');
    }

    async enterSignUpData(
        country: string,
        password: string,
        email?: string,
        phoneNumber?: string,
        check1: boolean = true,
        check2: boolean = true,
        check3: boolean = true
    ) {
        //May be can write more neat
        const inputEmail = email ?? DataGenerator.generateRandomEmail(5, 'newUser', 'test.com');
        const inputPhone = phoneNumber ?? DataGenerator.generateRandomPhone(8);
        await this.emailField.fill(inputEmail);
        await this.selectFromDropDown(this.countrySelection, country);
        await this.phoneNumberField.fill(inputPhone);
        await this.passwordField.fill(password);
        await this.page.mouse.click(0, 0);
        if (check1) await this.termsOfUse.click();
        if (check2) await this.privacyPolicy.click();
        if (check3) await this.communication.click();
        await this.next.click();
    }
}


