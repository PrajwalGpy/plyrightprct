const{test,expect} = require('@playwright/test')

test('iframe',async ({page})=>{


    await page.goto("https://qa-automation-practice.netlify.app/iframe");

    const locater = await page.frameLocator("#iframe-checkboxes");
    await locater.locator("#learn-more").click();

})