const{test,expect} = require('@playwright/test')

test('keymoment',async function ({page}) {
    await page.goto("https://www.google.com/");
    await page.getByRole('combobox').focus()
    await page.keyboard.type("Prjwal Gopal Poojary")
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.down("Shift");

    for(let i=0;i<10;i++){
        await page.keyboard.press('ArrowLeft')
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press("Backspace");
    

})
