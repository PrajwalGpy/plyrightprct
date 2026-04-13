const{test,expect}  =require('@playwright/test')

test('google title check',async function({page}){
    await page.goto('http://google.com')
    // const url = await page.url
    // console.log(url)

    const title = await page.title()
    await expect(page).toHaveTitle('Google')
})