const{test,expect} = require('@playwright/test')


test("dropdown", async function ({ page }) {
  await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");

  // 1. Better Selector: Use the tag name or a placeholder if the role fails
  const dropdown = page.locator("select");

  // 2. Select by value
  await dropdown.selectOption({ value: "GGY" }); // 'GGY' is the actual value attribute for Guernsey

  // 3. (Optional) Verify the selection
  await expect(dropdown).toHaveValue("GGY");
});