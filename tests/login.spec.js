const{test,expect} = require('@playwright/test')

test('login page',async function({page}){

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    await page.getByRole('textbox',{name:"username"}).fill("student");
    await page.getByRole('textbox',{name:"password"}).fill("Password123");
    await page.getByRole("button", { name: "submit" }).click();

    await expect(page).toHaveURL(/.*logged-in-successfully/);

    await expect(page.getByRole("heading", {name : "Logged In Successfully"})).toBeVisible()
    await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();

    
})