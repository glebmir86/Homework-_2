import { Locator, Page } from "@playwright/test"
import { BasePage } from "./basePage"
import * as DataGenerator from "../helpers/dataGenerator"

export class PersonalInformation extends BasePage {
    readonly firstNameField: Locator
    readonly lastNameField: Locator
    readonly dateOfBirthField: Locator
    readonly addressField: Locator
    readonly countryDropDown: Locator
    readonly idNumberField: Locator
    readonly idExpDateField: Locator
    readonly nextButtonField: Locator

    constructor(page: Page) {
        super(page);
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.dateOfBirthField = page.getByPlaceholder('Date of Birth: DD-MM-YYYY');
        this.addressField = page.getByPlaceholder('Address');
        this.countryDropDown = page.locator('#react-select-2-input');
        this.idNumberField = page.getByPlaceholder('Passport or ID doc number');
        this.idExpDateField = page.getByPlaceholder('ID document Expiration Date');
        this.nextButtonField = page.getByText('Next');
    }

    async enterPersonalInfo(
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        address: string,
        country: string,
        idExpDate: string,
        idNumber?: string,
    ) {
        const inputID = idNumber ?? DataGenerator.generateRandomId(5, 'testID');
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.dateOfBirthField.fill(dateOfBirth);
        await this.addressField.fill(address);
        await this.countryDropDown.click();
        await this.page.getByText(country).click();
        await this.idNumberField.fill(inputID); 
        await this.idExpDateField.fill(idExpDate);
        await this.nextButtonField.click();
    }
}