import { Page } from "@playwright/test"
import { BasePage } from "./basePage"
import { HomePage } from "./homePage"
import { SignUp } from "./signUp";
import { PersonalInformation } from "./personalInformation";
import { FinancialData } from "./financialData"
import { IdentityVerification } from "./identityVerification";

export class PageManager {
    readonly page: Page;
    private readonly baseePage: BasePage;
    private readonly homeePage: HomePage;
    private readonly signnUp: SignUp;
    private readonly personallInformation: PersonalInformation;
    private readonly financiallData: FinancialData;
    private readonly identityyVerification: IdentityVerification;

    constructor(page: Page) {
        this.page = page;
        this.baseePage = new BasePage(this.page);
        this.homeePage = new HomePage(this.page);
        this.signnUp = new SignUp(this.page);
        this.personallInformation = new PersonalInformation(this.page);
        this.financiallData = new FinancialData(this.page);
        this.identityyVerification = new IdentityVerification(page);
    }

    basePage() {
        return this.baseePage
    };

    homePage() {
        return this.homeePage
    };

    signUp() {
        return this.signnUp
    };

    personalInformation() {
        return this.personallInformation
    };

    financialData() {
        return this.financiallData
    };

    identityVerification() {
        return this.identityyVerification
    };
}


