const{test,expect} = require('@playwright/test');
const { pseudoRandomBytes } = require('node:crypto');

test('alreat', async ({page})=>{

    page.goto("https://qa-automation-practice.netlify.app/alerts");

    page.on('dialog',async (dilogbox)=>{
         expect(dilogbox.type()).toContain('alerat')

         expect(dilogbox.message()).toContain("Hello! I am an alert box!!");

         await dilogbox.accept()
    })

    await page.getByRole("button", { name: "Alert" });
})