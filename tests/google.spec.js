const{test,expect} = require('@playwright/test')

test("google title",async function({page}){

    await page.goto('https://google.com')
    const title = await page.title()
    await expect(page).toHaveTitle('hioo')
})