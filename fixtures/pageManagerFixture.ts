import {test as base, Page } from '@playwright/test'
import {PageManager} from '../page-objects/pageManager'

export type myFixture = {
    pageManager: PageManager
}

export const test = base.extend<myFixture>({
    pageManager: async ({page}, use) => {
        const pm = new PageManager(page);
        await use(pm);
    }
});

export {expect} from "@playwright/test";
